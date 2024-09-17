from django.urls import path
from .auth_views import LoginView, RegisterView, LogoutView
from .otp_views import SendOTPView, VerifyOTPView

urlpatterns = [
    path('v1/account/login/', LoginView.as_view()),
    path('v1/account/register/', RegisterView.as_view()),
    path('v1/account/logout/', LogoutView.as_view()),  # Logout API

    # OTP routes
    path('v1/account/send-otp/', SendOTPView.as_view()),
    path('v1/account/verify-otp/', VerifyOTPView.as_view()),
]
