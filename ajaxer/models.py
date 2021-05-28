from django.db import models

class Subscription(models.Model):
    customer_name = models.CharField(max_length=256)
    email = models.EmailField()
    class SubType(models.TextChoices):
        FREE = "free"
        PLUS = "plus"
        PRO = "pro"
    sub_type = models.CharField(choices=SubType.choices, max_length=4)

    def __str__(self):
        return f"{self.customer_name}'s {self.sub_type} subscription'"
