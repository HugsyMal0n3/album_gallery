from rest_framework import serializers
from .models import Album
import re


class AlbumSerializer(serializers.ModelSerializer):
    """
    Serializer for Album model and handles input validation
    """

    class Meta:
        model = Album
        fields = [
            "id",
            "title",
            "created_at",
        ]
        read_only_fields = [
            "id",
            "created_at",
        ]
        extra_kwargs = {
            "title": {
                "required": True,
                "allow_blank": False,
                "trim_whitespace": True,
                "min_length": 2,
                "max_length": 100,
            }
        }

    def validate_title(self, value: str) -> str:
        """
        Ensure title is normalised and not an invalid input
        """
        value = value.strip()

        if not re.match(r"^[\w\s\-]+$", value):
            raise serializers.ValidationError("Invalid characters")

        return value
