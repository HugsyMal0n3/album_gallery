from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from django.utils.dateparse import parse_date

from .models import Album
from .serializers import AlbumSerializer


class AlbumViewSet(viewsets.ModelViewSet):
    """
    API endpoint for viewing and creating albums.

    Supports:
    - listing albums
    - album creation
    - search and retrieval of single album
    """

    queryset = Album.objects.all()

    serializer_class = AlbumSerializer
    permission_classes = [AllowAny]

    search_fields = ["title"]

    ordering_fields = ["created_at", "title"]
    ordering = ["-created_at"]
