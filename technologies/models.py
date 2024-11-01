from django.db import models


class Technology(models.Model):
    """
    class for the technology model, representing different
    languages, frameworks used etc
    """

    # List of skill type options
    FRONTEND = 'Frontend'
    BACKEND = 'Backend'
    TOOLS = 'Tools'
    
    SKILL_TYPE_CHOICES = [
        (FRONTEND, 'Frontend'),
        (BACKEND, 'Backend'),
        (TOOLS, 'Tools'),
    ]

    name = models.CharField(max_length=50, unique=True)
    skill_type = models.CharField(
        max_length=20, choices=SKILL_TYPE_CHOICES, blank=False
        )

    class Meta:
        ordering = ['name']

    def __str__(self):
        return f'{self.name} for {self.skill_type}'
