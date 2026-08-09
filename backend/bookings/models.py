from django.db import models

class Property(models.Model):
    title = models.CharField(max_length=256)
    slug = models.SlugField(max_length=256, unique=True)
    location = models.CharField(max_length=256)
    price_1_bed = models.PositiveIntegerField()
    price_2_bed = models.PositiveIntegerField()
    price_3_bed = models.PositiveIntegerField(null=True, blank=True)
    badge = models.CharField(max_length=64, blank=True)
    description = models.TextField(blank=True)
    image_url = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class BookingRequest(models.Model):
    STATUS_CHOICES = [
        ("pending", "Pending"),
        ("confirmed", "Confirmed"),
        ("cancelled", "Cancelled"),
    ]

    property = models.ForeignKey(Property, on_delete=models.CASCADE, related_name="booking_requests")
    full_name = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=32)
    bedrooms = models.PositiveSmallIntegerField()
    guests = models.PositiveSmallIntegerField()
    check_in = models.DateField()
    check_out = models.DateField()
    total_price = models.PositiveIntegerField()
    notes = models.TextField(blank=True)
    status = models.CharField(max_length=16, choices=STATUS_CHOICES, default="pending")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.full_name} — {self.property.title} ({self.check_in} to {self.check_out})"
