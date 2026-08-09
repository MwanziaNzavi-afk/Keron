from rest_framework import serializers
from .models import BookingRequest, Property

class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = [
            "id",
            "title",
            "slug",
            "location",
            "price_1_bed",
            "price_2_bed",
            "price_3_bed",
            "badge",
            "description",
            "image_url",
        ]

class BookingRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookingRequest
        fields = [
            "id",
            "property",
            "full_name",
            "email",
            "phone",
            "bedrooms",
            "guests",
            "check_in",
            "check_out",
            "total_price",
            "notes",
            "status",
            "created_at",
        ]
        read_only_fields = ["status", "created_at"]

    def validate(self, data):
        if data["check_out"] <= data["check_in"]:
            raise serializers.ValidationError("Check-out date must be later than check-in date.")
        if data["bedrooms"] not in [1, 2, 3]:
            raise serializers.ValidationError("Bedrooms must be 1, 2, or 3.")
        if data["guests"] <= 0:
            raise serializers.ValidationError("Guests must be at least 1.")
        return data
