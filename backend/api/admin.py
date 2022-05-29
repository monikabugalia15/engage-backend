from django.contrib import admin
from .models import Rating, Movies, Usermodel, Link, History
# Register your models here.

admin.site.register(Rating)
admin.site.register(Movies)
admin.site.register(Usermodel)
admin.site.register(Link)
admin.site.register(History)
