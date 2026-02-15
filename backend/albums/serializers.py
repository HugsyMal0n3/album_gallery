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
            }
        }

    def validate_title(self, value: str) -> str:
        """
        Ensure title is normalised and not an invalid input
        """
        value = value.strip()

        if 2 > len(value) > 100:
            raise serializers.ValidationError("Title invalid length.")

        if not re.match(r"^[\W\s\-]+$", value):
            raise serializers.ValidationError("Invalid characters")

        return value
