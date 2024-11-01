from rest_framework import generics
from .models import Technology
from .serializers import TechnologySerializer


class TechnologyList(generics.ListAPIView):
    """
    class to display list of projects and option to filter
    by technology name
    """
    queryset = Technology.objects.all()
    serializer_class = TechnologySerializer
