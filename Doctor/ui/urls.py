from django.urls import path
from .views import index

urlpatterns = [
    path('', index, name='home'),
    path('about/', index, name='about'),
    path('contact/', index, name='contact'),
    path('search/<str:search>/<int:page>/', index, name='search'),
    path('blog/<str:slug>', index, name='blog'),
    path('blogs/<int:page>/', index, name='blog'),
    path('blogs/<str:category>/<int:page>/', index, name='blog'),
    path('services/', index, name='services'),
]
