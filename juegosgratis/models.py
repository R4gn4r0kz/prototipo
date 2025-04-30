from django.db import models

# Create your models here.
class Juego(models.Model):
    titulo = models.CharField(max_length=100)
    genero = models.CharField(max_length=50)
    plataforma = models.CharField(max_length=50)
    precio = models.DecimalField(max_digits=6, decimal_places=2)
    descripcion = models.TextField()
    url = models.URLField()

    def __str__(self):
        return self.titulo
