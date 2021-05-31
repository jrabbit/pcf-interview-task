from django.shortcuts import render
from django.views.generic.list import ListView
from django.views.generic import CreateView, TemplateView
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

from .models import Subscription

class WebHome(TemplateView):
    template_name = "index.html"

class SubscriptionHome(ListView):
    model = Subscription

@method_decorator(csrf_exempt, name="dispatch")
class SubscriptionCreate(CreateView):
    model = Subscription
