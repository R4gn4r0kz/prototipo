from django.contrib import admin
from django.urls import path, include
from .views import juegos,registro1,registro2,registrotrabajador,sesion,contraseña,perfil,aventura,accion,carreras,estrategia,terror
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('juegos', juegos, name='juegos'),
    path('registro1', registro1, name='registro1'),
    path('registro2', registro2, name='registro2'),
    path('registrotrabajador', registrotrabajador, name='registrotrabajador'),
    path('sesion', sesion, name='sesion'),
    path('contraseña', contraseña, name='contraseña'),
    path('perfil', perfil, name='perfil'),
    path('aventura', aventura, name='aventura'),
    path('accion', accion, name='accion'),
    path('carreras', carreras, name='carreras'),
    path('estrategia', estrategia, name='estrategia'),
    path('terror', terror, name='terror'),
    path('', include('vgames.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0])