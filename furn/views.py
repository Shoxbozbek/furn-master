from django.shortcuts import render, reverse, redirect
from furn.models import *
from furn.form import Registration
from django.views import generic

def home(request):

    category = request.GET.get('category')
    if category == None:
        arrivals = Arrival.objects.all()
    else:
        arrivals = Arrival.objects.filter(category__category_name=category)

    base = Carousel.objects.all()
    blog = Blog.objects.all()
    products = Product.objects.all()
    categories = Category.objects.all()
    users = MyUser.objects.count()
    return render(request, 'pages/home.html', {"base": base, "arrivals":arrivals, "blog":blog, "products":products,  "categories": categories, "users": users},)

def arrivals_detail(request, pk):
    arrivals_details = Arrival.objects.get(id=pk)
    context = {"arrivals_details":arrivals_details}
    return render(request, 'details/arrivals_details.html', context)


def signup(request):
    form = Registration
    if request.method == 'POST':
        form = Registration(request.POST)
        if form.is_valid():
            form.save()
            return redirect("/")
    return render(request, 'registration/signup.html', {"form":form})

def logout(request):
    return render(request, 'registration/logout.html')