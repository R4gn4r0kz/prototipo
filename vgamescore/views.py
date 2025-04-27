from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.shortcuts import render, redirect
from django.db import IntegrityError
from .models import Usuario
from .forms import RegistroForm, PerfilForm

# **Inicio de sesión**
def login_view(request):
    if request.method == 'POST':
        correo = request.POST['correo']
        contraseña = request.POST['contraseña']
        usuario = authenticate(request, username=correo, password=contraseña)
        if usuario is not None:
            login(request, usuario)
            if usuario.rol.nombre == 'Administrador':
                return redirect('admin_view')
            else:
                return redirect('perfil_usuario')
        else:
            return render(request, 'login.html', {'error': 'Credenciales inválidas'})
    return render(request, 'login.html')


# **Cerrar sesión**
def logout_view(request):
    logout(request)
    return redirect('login')


# **Perfil del usuario**
@login_required
def perfil_usuario(request):
    usuario = request.user
    return render(request, 'perfil.html', {'usuario': usuario})


# **Editar perfil**
@login_required
def editar_perfil(request):
    usuario = request.user
    if request.method == 'POST':
        form = PerfilForm(request.POST, instance=usuario)
        if form.is_valid():
            form.save()
            return redirect('perfil_usuario')  # Redirigir al perfil después de guardar
    else:
        form = PerfilForm(instance=usuario)
    return render(request, 'editar_perfil.html', {'form': form})


# **Vista del administrador**
@login_required
def admin_view(request):
    usuario = request.user
    if usuario.rol.nombre != 'Administrador':
        return redirect('perfil_usuario')
    return render(request, 'admin.html')


# **Registro - Paso 1**
def registro_paso1(request):
    if request.method == 'POST':
        nombreusuario = request.POST.get('nombreusuario')
        correo = request.POST.get('correo')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirmPassword')

        # Validar contraseñas
        if password != confirm_password:
            messages.error(request, "Las contraseñas no coinciden.")
            return render(request, 'registro1.html')

        # Validar que el correo no esté registrado
        if Usuario.objects.filter(correo=correo).exists():
            messages.error(request, "El correo ya está registrado.")
            return render(request, 'registro1.html')

        # Guardar datos en la sesión temporal
        request.session['nombreusuario'] = nombreusuario
        request.session['correo'] = correo
        request.session['password'] = password

        # Redirigir al paso 2
        return redirect('registro2')

    return render(request, 'registro1.html')


# **Registro - Paso 2**
def registro_paso2(request):
    if request.method == 'POST':
        nombre = request.POST.get('nombre')
        apellido = request.POST.get('apellido')
        fecha_nacimiento = request.POST.get('fechaNacimiento')
        direccion = request.POST.get('direccion')
        comuna_id = request.POST.get('comuna')  # Si tienes un campo de comuna

        # Recuperar datos del paso 1 desde la sesión
        nombreusuario = request.session.get('nombreusuario')
        correo = request.session.get('correo')
        password = request.session.get('password')

        try:
            # Crear el usuario en la base de datos
            usuario = Usuario.objects.create(
                nombre=f"{nombre} {apellido}",
                correo=correo,
                fecha_nacimiento=fecha_nacimiento,
                direccion=direccion,
                comuna_id=comuna_id if comuna_id else None,
            )
            # Encriptar la contraseña
            usuario.set_password(password)
            usuario.save()
        except IntegrityError:
            messages.error(request, "El correo ya está registrado. Por favor, usa otro.")
            return redirect('registro1')

        # Limpiar datos de la sesión
        request.session.flush()

        # Mostrar mensaje de éxito
        messages.success(request, "Usuario registrado exitosamente.")
        return redirect('sesion')  # Redirigir a la página de inicio de sesión

    return render(request, 'registro2.html')