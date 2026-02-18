from rest_framework import viewsets, filters
from rest_framework.permissions import AllowAny

from .models import Album
from .serializers import AlbumSerializer
from .pagination import DefaultPagination


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
    pagination_class = DefaultPagination

    filter_backends = [filters.SearchFilter, filters.OrderingFilter]

    search_fields = ["title"]

    ordering_fields = ["created_at", "title"]
    ordering = ["-created_at"]
