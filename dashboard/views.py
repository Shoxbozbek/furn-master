from datetime import date
from django.shortcuts import render, redirect
from django.contrib.auth import logout
from django.contrib.auth import get_user_model
from furn.models import Contact, Product, Blog, Arrival
from django.db.models import Q
from django.utils import timezone


User = get_user_model()

def dashboard_home(request):
    user = User.objects.count()
    blogs = Blog.objects.count()
    new_products = Arrival.objects.count()
    products = Product.objects.count() + new_products
    contact = Contact.objects.count()
    contact_taklif = Contact.objects.filter(choices="Taklif").count()
    contact_shikoyat = Contact.objects.filter(choices="Shikoyat").count()
    
    # contact_last
    contact_last = Contact.objects.filter(date__date=timezone.now()).count()
    context = {
        "users": user,
        "blogs":blogs,
        "products":products,
        "new_products": new_products,
        'contact': contact,
        'contact_taklif': contact_taklif,
        'contact_shikoyat': contact_shikoyat,
        'contact_last': contact_last
    }
    return render(request, 'dashboard/pages/home.html', context)

def buttons(request):
    return render(request, 'dashboard/includes/buttons.html')

def cards(request):
    return render(request, 'dashboard/includes/cards.html')

def animation(request):
    return render(request, 'dashboard/includes/animation.html')

def colors(request):
    return render(request, 'dashboard/includes/colors.html')

def border(request):
    return render(request, 'dashboard/includes/border.html')

def other(request):
    return render(request, 'dashboard/includes/other.html')

def dashboard_login(request):
    return render(request, 'dashboard/registertration/login.html')

def forgot_password(request):
    return render(request, 'dashboard/includes/forgot-password.html')

def register(request):
    return render(request, 'dashboard/registertration/register.html')

def charts(request):
    return render(request, 'dashboard/includes/charts.html')

def tables(request):
    
    if 'p' in request.GET:
        search = request.GET['p']
        full_search = Q(Q(first_name__icontains=search) | Q(email__icontains=search))
        users = User.objects.filter(full_search)
    else:
        users = User.objects.all()
    
    context = {
        "users": users,
    }
    return render(request, 'dashboard/includes/tables.html', context)


def page_404(request):
    return render(request, 'dashboard/includes/404.html')

def blank(request):
    return render(request, 'dashboard/includes/blank.html')

