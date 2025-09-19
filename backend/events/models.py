from django.db import models

class Event(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=200, blank=True)
    description = models.TextField(blank=True)
    date = models.DateField(blank=True, null=True)
    image = models.URLField(blank=True, null=True)  # Using URL for simplicity
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
