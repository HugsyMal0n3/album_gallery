from django.test import TestCase
from django.db import IntegrityError, transaction

from albums.models import Album


class AlbumModelTests(TestCase):
    """
    Tests for Album model database behavioud and constraints
    """

    def test_album_with_valid_title_saves_successfully(self):
        album = Album.objects.create(title="My Album")

        self.assertEqual(album.title, "My Album")
        self.assertIsNotNone(album.created_at)
        self.assertIsNotNone(album.updated_at)

    def test_album_title_cannot_be_empty_due_to_check_constraint(self):
        with self.assertRaises(IntegrityError):
            with transaction.atomic():
                Album.objects.create(title="")
