from rest_framework import serializers
from .models import Videojuego

class VideojuegoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Videojuego
        fields = ['id', 'nombre', 'descripcion', 'precio', 'fecha_lanzamiento', 'genero', 'stock']