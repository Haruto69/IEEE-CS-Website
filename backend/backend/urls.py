from django.contrib import admin
from django.urls import path, include
from api.views import home
from users.views import RegisterView   # 👈 import RegisterView from your new users app
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path("", home),
    path("admin/", admin.site.urls),
    path("api/", include("api.urls")),  # your existing API routes

    # 🔹 Auth endpoints
    path("api/register/", RegisterView.as_view(), name="register"),
    path("api/login/", TokenObtainPairView.as_view(), name="login"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]
