from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from .models import Project
from .serializers import ProjectSerializer


class ProjectListTests(APITestCase):
    """
    Class for testing the project views.
    """
    def setUp(self):
        self.url = reverse('project-list')
        self.project1 = Project.objects.create(
            id=1,
            title='Project 1',
            summary='Summary for project 1',
            overview='Overview for project 1',
            image='images/test1.jpg',
            github='https://github.com/example/project1',
            live_site='https://example.com/project1'
        )
        self.project2 = Project.objects.create(
            id=2,
            title='Project 2',
            summary='Summary for project 2',
            overview='Overview for project 2',
            image='images/test2.jpg',
            github='https://github.com/example/project2',
            live_site='https://example.com/project2'
        )

    # Test to get all projects
    def test_get_all_projects(self):
        response = self.client.get(self.url)
        projects = Project.objects.all()
        serializer = ProjectSerializer(projects, many=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['count'], 2)
        self.assertEqual(response.data['results'], serializer.data)

    # Test to get a single project
    def test_get_single_project(self):
        response = self.client.get(f'/api/projects/1/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], 'Project 1')
