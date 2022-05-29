from rest_framework import serializers
from .models import Rating, Movies, Usermodel, Link, History

class RatingSerializers(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = '__all__'

class MoviesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Movies
        fields = '__all__'

class UsermodelSerializers(serializers.ModelSerializer):
    class Meta:
        model = Usermodel
        fields = '__all__'

class LinkSerializers(serializers.ModelSerializer):
    class Meta:
        model = Link
        fields='__all__'

class HistorySerializer(serializers.ModelSerializer):
    class Meta:
        model =History
        fields='__all__'