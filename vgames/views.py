#Importo utilidades de auth
from django.shortcuts import render
from django.shortcuts import redirect
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.urls import reverse_lazy
from django.views.generic import CreateView, UpdateView, DeleteView
from django import forms
from django.contrib.auth.models import User
from .forms import UserCreateForm, UserUpdateForm, PerfilForm



#Create your views here.
def juegos(request):
    return render(request, 'index.html')

def registro1(request):
    return render(request, 'registro/registrocliente1.html')

def registro2(request):
    return render(request, 'registro/registrocliente2.html')

def registrotrabajador(request):
    return render(request, 'registro/registrotrabajador.html')

def sesion(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('juegos')
        else:
            messages.error(request, "Usuario o contraseña inválidos")
    return render(request, 'registro/iniciosesion.html')

def cerrar_sesion(request):
    request.session.flush()
    return redirect('sesion')

def contraseña(request):
    return render(request, 'registro/contraseña.html')

def categoria_aventura(request):
    return render(request, 'categorias/categoria_aventura.html')

def categoria_accion(request):
    return render(request,'categorias/categoria_accion.html')

def categoria_carrera(request):
    return render(request, 'categorias/categoria_carreras.html')

def categoria_estrategia(request):
    return render(request, 'categorias/categoria_estrategia.html')

def categoria_terror(request):
    return render(request, 'categorias/categoria_terror.html')

def age(request):
    return render(request, 'juegos/age.html')

def eldenring(request):
    return render(request, 'juegos/eldenring.html')

def warhammer(request):
    return render(request, 'juegos/warhammer.html')

def zelda(request):
    return render(request, 'juegos/zelda.html')

def tomb(request):
    return render(request, 'juegos/tomb.html')

def star(request):
    return render(request, 'juegos/star.html')

def outlast(request):
    return render(request, 'juegos/outlast.html')

def resident(request):
    return render(request, 'juegos/resident.html')

def forza(request):
    return render(request, 'juegos/forza.html')

def need(request):
    return render(request, 'juegos/need.html')

def carrito(request):
    return render(request, 'carrito/carrito.html')

def perfil(request):
    return render(request, 'perfil/perfil.html')

def eliminar_perfil(request):
    return render(request, 'perfil/eliminar.html')

@login_required
def perfil_usuario(request):
    usuario = request.user  # Obtiene el usuario autenticado
    return render(request, 'perfil/perfil.html', {'usuario': usuario})  # Renderiza la plantilla perfil.html

@login_required
def editar_perfil(request):
    usuario = request.user
    if request.method == 'POST':
        form = PerfilForm(request.POST, instance=usuario)
        if form.is_valid():
            form.save()
            return redirect('perfil_usuario')  # Redirige al perfil después de guardar los cambios
    else:
        form = PerfilForm(instance=usuario)
    return render(request, 'perfil/editar.html', {'form': form})

@login_required
def admin_view(request):
    usuario = request.user
    # Verifica si el usuario tiene permisos de administrador
    if not usuario.is_staff:  # Puedes usar `is_staff` o cualquier lógica personalizada
        return redirect('perfil_usuario')  # Redirige a una página si no tiene acceso

    # Renderiza la página de administrador
    return render(request, 'admin.html', {'usuario': usuario})

@login_required
def perfil(request):
    return render(request, 'perfil/perfil.html')
