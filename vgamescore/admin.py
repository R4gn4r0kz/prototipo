from django.contrib import admin
from .models import Comuna, Rol, Usuario, Videojuego, Venta, Plataforma, VideojuegoPlataforma

# Registrar los modelos en el Administrador de Django
admin.site.register(Rol)
admin.site.register(Comuna)
admin.site.register(Usuario)
admin.site.register(Videojuego)
admin.site.register(Venta)
admin.site.register(Plataforma)
admin.site.register(VideojuegoPlataforma)