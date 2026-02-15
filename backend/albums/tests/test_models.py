from django.test import TestCase
from django.db import IntegrityError, transaction

from albums.models import Album


class AlbumModelTests(TestCase):
    def test_album_saves_valid_entry(self):
        """
        Album object should be created when title is valid
        """
        album = Album.objects.create(title="My Album")

        self.assertEqual(album.title, "My Album")
        self.assertIsNotNone(album.created_at)
        self.assertIsNotNone(album.updated_at)

    def test_album_title_cannot_be_empty_check_constraint(self):
        """
        Database should reject empty title due to CheckConstraint
        """
        with self.assertRaises(IntegrityError):
            with transaction.atomic():
                Album.objects.create(title="")
