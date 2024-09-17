from rest_framework import serializers
from .models import MyUser

# User Login Serializer
class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=128)
    password = serializers.CharField(max_length=128)

# User Register Serializer
class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = [
            'username',
            'password',
            'first_name',
            'last_name',
            'profile_pic',
            'phone_number',
        ]

    def validate_username(self, value):
        """Check if the username already exists"""
        if MyUser.objects.filter(username=value).exists():
            raise serializers.ValidationError("کاربری با این نام کاربری قبلاً ثبت شده است.")
        return value

    def validate_phone_number(self, value):
        """Check if the phone number already exists"""
        if MyUser.objects.filter(phone_number=value).exists():
            raise serializers.ValidationError("کاربری با این شماره تلفن قبلاً ثبت شده است.")
        return value

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = MyUser.objects.create(**validated_data)
        user.set_password(password)
        user.save()
        return user
