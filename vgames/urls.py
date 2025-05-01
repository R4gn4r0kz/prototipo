from django.urls import path, include
from .views import juegos,registro1,registro2,registrotrabajador,sesion,cerrar_sesion,contraseña,perfil,categoria_aventura,categoria_accion, categoria_carrera, categoria_estrategia, categoria_terror, age,eldenring, warhammer, zelda, tomb, star, outlast, resident, forza, need, carrito, perfil
from django.contrib.auth.decorators import login_required
from . import views 
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('juegos', juegos, name='juegos'),
    path('registro/registro1', registro1, name='registro1'),
    path('registro/registro2', registro2, name='registro2'),
    path('registrotrabajador', registrotrabajador, name='registrotrabajador'),
    path('sesion', sesion, name='sesion'),
    path('logout', cerrar_sesion, name='logout'),
    path('registro/contraseña', contraseña, name='contraseña'),
    path('categorias/aventura', categoria_aventura, name='categoria_aventura'),
    path('categorias/accion', categoria_accion, name='categoria_accion'),
    path('categorias/carrera', categoria_carrera, name='categoria_carrera'),
    path('categorias/estrategia', categoria_estrategia, name='categoria_estrategia'),
    path('categorias/terror', categoria_terror, name='categoria_terror'),
    path('juegos/age', age, name='age'),
    path('juegos/eldenring', eldenring, name='eldenring'),
    path('juegos/warhammer', warhammer, name='warhammer'),
    path('juegos/zelda', zelda, name='zelda'),
    path('juegos/tomb', tomb, name='tomb'),
    path('juegos/star', star, name='star'),
    path('juegos/outlast', outlast, name='outlast'),
    path('juegos/resident', resident, name='resident'),
    path('juegos/forza', forza, name='forza'),
    path('juegos/need', need, name='need'),
    path('carrito/carrito', carrito, name='carrito'),
    path('perfil/perfil', perfil, name='perfil'),
    path('perfil/', login_required(views.perfil_usuario), name='perfil_usuario'),
    path('perfil/editar/', login_required(views.editar_perfil), name='editar_perfil'),
    path('perfil/eliminar', login_required(views.eliminar_perfil), name='eliminar_perfil'),
    path('admin/', login_required(views.admin_view), name='admin_view'),
    path('password_reset/', auth_views.PasswordResetView.as_view(template_name='password_reset.html'), name='password_reset'),
    path('password_reset/done/', auth_views.PasswordResetDoneView.as_view(template_name='password_reset_done.html'), name='password_reset_done'),
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(template_name='password_reset_confirm.html'), name='password_reset_confirm'),
    path('reset/done/', auth_views.PasswordResetCompleteView.as_view(template_name='password_reset_complete.html'), name='password_reset_complete'),
    path('perfil/', views.perfil_usuario, name='perfil'),
    path('perfil/registrocliente1.html', registro1, name='registrocliente1'),
    path('perfil/registrocliente2.html', registro2, name='registrocliente2'),
]

