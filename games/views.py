from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import render
from .models import VideoGame
from .serializers import VideoGameSerializer

# Vista para renderizar videojuegos en HTML (opcional)
def videogames_list(request):
    videogames = VideoGame.objects.all()
    return render(request, 'games/videogames_list.html', {'videogames': videogames})

# API basada en clases para retornar videojuegos en JSON
class VideoGameView(APIView):
    def get(self, request):
        videogames = VideoGame.objects.all()
        serializer = VideoGameSerializer(videogames, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VideoGameSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)