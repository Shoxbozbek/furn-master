from django.urls import path
from . import  views
from django.contrib.auth.views import LoginView, LogoutView

app_name = 'furn'

urlpatterns = [
    path('', views.home, name="home"),
    path('<int:pk>/details/', views.arrivals_detail, name='arrivals_detail'),
    path("signup/", views.signup, name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('logout-page/', views.logout, name='logout-page')
]
