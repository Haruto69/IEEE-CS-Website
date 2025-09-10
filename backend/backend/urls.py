from django.contrib import admin
from django.urls import path, include
from api.views import home  # <-- import the home view


urlpatterns = [
    path("", home),
    path("admin/", admin.site.urls),
    path("api/", include("api.urls")),  # only use the new api app
]
