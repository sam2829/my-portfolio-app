# Generated by Django 5.1.2 on 2024-10-20 07:22

import cloudinary.models
import projects.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('technologies', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('summary', models.TextField(max_length=200)),
                ('overview', models.TextField(max_length=500)),
                ('image', cloudinary.models.CloudinaryField(max_length=255, validators=[projects.models.validate_image], verbose_name='images')),
                ('github', models.URLField()),
                ('live_site', models.URLField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('technologies', models.ManyToManyField(to='technologies.technology')),
            ],
            options={
                'ordering': ['-created_at'],
            },
        ),
    ]
