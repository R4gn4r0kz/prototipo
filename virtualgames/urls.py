"""
URL configuration for virtualgames project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
<<<<<<< HEAD
    path('', include('vgames.urls')),  # Tu página principal
    path('', include('juegosgratis.urls')),  # Esto incluye las rutas tal cual: /juegos-gratis/ y /api/juegos-gratis/
=======
    path('', include('vgames.urls')),
    
>>>>>>> 00441e52126b7b1eb8e656eac5120910f479d158
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0])
<<<<<<< HEAD


=======
>>>>>>> 00441e52126b7b1eb8e656eac5120910f479d158
