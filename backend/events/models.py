from django.db import models

class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateField()
    image = models.URLField(blank=True, null=True)  # URL of event image

    def __str__(self):
        return self.title
