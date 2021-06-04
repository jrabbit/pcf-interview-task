import json
import logging
from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic.list import ListView
from django.views.generic import CreateView, TemplateView
from django.utils.decorators import method_decorator
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import ensure_csrf_cookie

from .models import Subscription

@method_decorator(ensure_csrf_cookie, name="dispatch")
class WebHome(TemplateView):
    template_name = "index.html"

@method_decorator(ensure_csrf_cookie, name="dispatch")
class SubscriptionHome(ListView):
    model = Subscription

@require_POST
def ajax_intake(request):
    logging.info("got data")
    parsed = json.loads(request.body)
    # print(parsed)
    s = Subscription()
    s.customer_name = parsed["name"]
    s.email = parsed["email"]
    s.sub_type = parsed["subscription_type"]
    s.save()
    print(s)
    return HttpResponse("OK")

# @method_decorator(csrf_exempt, name="dispatch")
# class SubscriptionCreate(CreateView):
    # model = Subscription
