import requests

from django.core.management.base import BaseCommand, CommandError
from django.db import transaction
from albums.models import Album


API_URL = "https://jsonplaceholder.typicode.com/albums"


class Command(BaseCommand):
    help = "Seed database with albums from JSONPlaceholder"

    def handle(self, *args, **options):
        try:
            response = requests.get(API_URL, timeout=10)
            response.raise_for_status()
        except requests.HTTPError as exc:
            raise CommandError(f"HTTP error occured: {exc}")
        except requests.RequestException as exc:
            raise CommandError(f"Failed to fetch albums: {exc}")

        albums_data = response.json()

        with transaction.atomic():
            for item in albums_data:
                external_id = item["id"]
                title = item["title"].strip()

                Album.objects.get_or_create(
                    external_id=external_id,
                    defaults={"title": title},
                )

        self.stdout.write(self.style.SUCCESS("Seeding complete"))
