from django.db import models

# Create your models here.

class Rol(models.Model):
    nombre = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre

class Comuna (models.Model):
    nombre = models.CharField(max_length=50)
    
    def __str__(self):
        return self.nombre

class Usuario(models.Model):
    nombre = models.CharField(max_length=100)
    correo = models.EmailField(unique=True)  
    contraseña = models.CharField(max_length=100)
    fecha_nacimiento = models.DateField(null=True, blank=True)
    comuna = models.ForeignKey(Comuna, on_delete=models.CASCADE)
    rol = models.ForeignKey(Rol, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre


# Tabla Videojuegos
class Videojuego(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    fecha_lanzamiento = models.DateField()
    genero = models.CharField(max_length=50)
    stock = models.PositiveIntegerField()

    def __str__(self):
        return self.nombre

# Tabla Ventas
class Venta(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)  # Relación con Usuario
    videojuego = models.ForeignKey(Videojuego, on_delete=models.CASCADE)  # Relación con Videojuego
    fecha_venta = models.DateTimeField(auto_now_add=True)
    cantidad = models.PositiveIntegerField()
    total = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Venta #{self.id} por {self.usuario}"

# Tabla Plataformas
class Plataforma(models.Model):
    nombre = models.CharField(max_length=50)
    descripcion = models.TextField()

    def __str__(self):
        return self.nombre

# Relación Muchos a Muchos entre Videojuego y Plataforma
class VideojuegoPlataforma(models.Model):
    videojuego = models.ForeignKey(Videojuego, on_delete=models.CASCADE)
    plataforma = models.ForeignKey(Plataforma, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.videojuego} - {self.plataforma}"