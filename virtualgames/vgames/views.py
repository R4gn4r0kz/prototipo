from django.shortcuts import render

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
    return render(request, 'registro/iniciosesion.html')

def contraseña(request):
    return render(request, 'registro/contraseña.html')

def perfil(request):
    return render(request, 'perfil/perfil.html')

def aventura(request):
    return render(request, 'categorias/categoria_aventura.html')

def accion(request):
    return render(request, 'categorias/categoria_accion.html')

def carreras(request):
    return render(request, 'categorias/categoria_carreras.html')

def estrategia(request):
    return render(request, 'categorias/categoria_estrategia.html')

def terror(request):
    return render(request, 'categorias/categoria_terror.html')