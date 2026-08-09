from django.core.management.base import BaseCommand
from bookings.models import Property

PROPERTIES = [
    {
        "title": "Bamburi Fisheries Apartments",
        "slug": "bamburi-fisheries-apartments",
        "location": "Bamburi Fisheries, Mombasa",
        "price_1_bed": 3000,
        "price_2_bed": 4000,
        "price_3_bed": 0,
        "badge": "Featured",
        "description": "Premium coastal short stay accommodation with modern interiors, concierge service, private security and housekeeping.",
        "image_url": "http://localhost:8000/uploads/bamburi/outside.png",
    },
    {
        "title": "Malindi",
        "slug": "malindi",
        "location": "Malindi, Coast",
        "price_1_bed": 6000,
        "price_2_bed": 6000,
        "price_3_bed": 6000,
        "badge": "Coastal Stay",
        "description": "Luxury coastal stay in Malindi with premium comfort and flexible booking options.",
        "image_url": "http://localhost:8000/uploads/malindi/Swimming%20Pool.png",
    },
    {
        "title": "Kingston Nyali",
        "slug": "kingston-nyali",
        "location": "Nyali, Mombasa",
        "price_1_bed": 8000,
        "price_2_bed": 15000,
        "price_3_bed": 20000,
        "badge": "Premium",
        "description": "Premium short-stay apartment in Kingston Nyali with flexible bedroom options.",
        "image_url": "http://localhost:8000/uploads/kingston-nyali/Outside.png",
    },
    {
        "title": "Studio Mlolongo",
        "slug": "mlolongo-apartment",
        "location": "Behind Signature Mall, Mlolongo",
        "price_1_bed": 2500,
        "price_2_bed": 2500,
        "price_3_bed": 0,
        "badge": "Short Stay",
        "description": "Comfortable studio apartment near Signature Mall for short and flexible stays.",
        "image_url": "http://localhost:8000/uploads/mlolongo/Sitting%20Room.png",
    },
    {
        "title": "Nyali Coral Sands",
        "slug": "nyali-coral-sands",
        "location": "Nyali, Mombasa",
        "price_1_bed": 2500,
        "price_2_bed": 2500,
        "price_3_bed": 0,
        "badge": "Premium",
        "description": "Modern apartment at Nyali Coral Sands, ideal for short stays with full amenities.",
        "image_url": "http://localhost:8000/uploads/nyali-coral-sands/balcony.png",
    },
]

class Command(BaseCommand):
    help = "Seed the database with initial property listings."

    def handle(self, *args, **options):
        for property_data in PROPERTIES:
            obj, created = Property.objects.update_or_create(
                slug=property_data["slug"],
                defaults=property_data,
            )
            action = "Created" if created else "Updated"
            self.stdout.write(f"{action} property: {obj.title}")
        self.stdout.write(self.style.SUCCESS("Property seeding complete."))
