import requests
from django.shortcuts import render

def mostrar_juegos(request):
    url = 'http://localhost:8000/api/juegos-gratis/'
    response = requests.get(url)  # Hacer una solicitud GET a la API
    juegos = response.json()  # Obtener los datos en formato JSON
    return render(request, 'juegosgratis/juegos_list.html', {'juegos': juegos})