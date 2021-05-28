from django.shortcuts import render
from django.views.generic.list import ListView

from .models import Subscription

class SubscriptionHome(ListView):
    model = Subscription
