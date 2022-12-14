from django.shortcuts import render, redirect
from django.views import generic
from furn.models import *
from furn.form import *
from django.db.models import Q
from django.http import JsonResponse
from django.db.models import Avg 


def home(request):

    category = request.GET.get('category')
    if category == None:
        arrivals = Arrival.objects.all()
    else:
        arrivals = Arrival.objects.filter(category__category_name=category)

    if 'q' in request.GET:
        search = request.GET['q']
        full_search = Q(Q(title__icontains=search) | Q(price__icontains=search))
        products = Product.objects.filter(full_search)
    else:
        products = Product.objects.all()
    
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid(): 
            form.save()
        return redirect("/")
    else:
        form = ContactForm()
        
    rate = RateStars.objects.filter(score=0).order_by("?").first()
    avg_rate = RateStars.objects.aggregate(Avg("score"))   
    blog = Blog.objects.all()
    base = Carousel.objects.all()
    categories = Category.objects.all()
    return render(request, 'pages/home.html', {
        "base": base,
         "blog":blog,
         "arrivals":arrivals,
         "products":products,
         "categories":categories,
         "form":form,
         "rate": rate,
         "avg_rate": avg_rate
        })
    
def arrivals_detail(request, pk):
    
    arrivals_details = Arrival.objects.get(id=pk)
    
    context = {
        "arrivals_details": arrivals_details,
    }
    return render(request, 'details/arrival_detail.html', context)

def signup(request):
    if request.method == 'POST':
        form = Registration(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/login')
    else:
        form = Registration()
        
    return render(request, 'registration/signup.html', {"form":form})

def logout_redirect(request):
    return render(request, 'registration/logout-redirect.html')

def profile(request):
    if request.method == 'POST':
        user_form = UptadeUserForm(request.POST, instance=request.user)
        profile_form = UptadeProfileForm(request.POST, request.FILES, instance=request.user.profile)
        if user_form.is_valid() and profile_form.is_valid():
            user_form.save()
            profile_form.save()
            return redirect('furn:profile')
    else:
        user_form = UptadeUserForm(instance=request.user)
        profile_form = UptadeProfileForm(instance=request.user.profile)
    
    context = {
        "user_form": user_form,
        "profile_form": profile_form
    }
    
    return render(request, 'pages/profile.html', context)

def rate_img(request):
    if request.method == "POST":
        el_id = request.POST.get("el_id")
        val = request.POST.get("val")
        rate = RateStars.objects.get(id=el_id)
        rate.score = val
        rate.save()
        return JsonResponse({"success": "true", "score": val}, safe=False)
    return JsonResponse({"success": "false"})