from django.urls import path
from . import views

urlpatterns = [
    path('videogames/', views.videogames_list, name='videogames_list'),  
    path('api/videogames/', views.VideoGameView.as_view(), name='videogames_api'),  
]