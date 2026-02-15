from django.db import models


class Album(models.Model):
    """
    Represents a collection of album items grouped by title.

    Supports external data imports and search/filter by title.
    """

    class Meta:
        ordering = ["-created_at"]
        indexes = [models.Index(fields=["title"])]
        constraints = [
            models.CheckConstraint(
                condition=~models.Q(title=""), name="album_title_not_empty"
            )
        ]

    title = models.CharField(
        blank=False, null=False, max_length=255, db_index=True, help_text="Album title"
    )

    created_at = models.DateTimeField(
        auto_now_add=True, help_text="Timestamp when album was created"
    )

    updated_at = models.DateTimeField(
        auto_now=True, help_text="Timestamp when album was last updated"
    )

    external_id = models.PositiveIntegerField(
        null=True, blank=True, unique=True, help_text="External source identifier"
    )

    def __str__(self):
        return self.title
