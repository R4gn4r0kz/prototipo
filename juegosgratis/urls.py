# juegosgratis/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('juegos-gratis/', views.juegos_list, name='juegos_list'),  # HTML
    path('api/juegos-gratis/', views.JuegosGratisView.as_view(), name='juegos_api'),  # API JSON
]

