from django.contrib import admin

from .models import Album


@admin.register(Album)
class AlbumAdmin(admin.ModelAdmin):
    list_display = ["id", "title", "created_at"]
    search_fields = ["title"]
    ordering = ["-created_at"]
    date_hierarchy = "created_at"
