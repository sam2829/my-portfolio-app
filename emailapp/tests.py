from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from unittest.mock import patch
from django.core.mail import EmailMessage


class SendEmailViewTests(APITestCase):
    """
    class for testing email views
    """
    def setUp(self):
        self.url = reverse('send_email')
        self.valid_data = {
            'name': 'John Doe',
            'email': 'johndoe@example.com',
            'telephone': '12345678901',
            'subject': 'Test Subject',
            'message': 'This is a test message.',
        }
        self.invalid_data = {
            'name': '',
            'email': 'invalid-email',
            'subject': '',
            'message': '',
        }

    # test for sending valid email
    @patch.object(EmailMessage, 'send', return_value=1)
    def test_send_email_success(self, mock_send):
        # Mocking the send method of EmailMessage
        response = self.client.post(self.url, self.valid_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['message'], 'Email sent successfully')
        # Verify that the send method was called once
        mock_send.assert_called_once()

    # test for failed email
    @patch.object(
        EmailMessage, 'send', side_effect=Exception('SMTP connection error')
    )
    def test_send_email_failure(self, mock_send):
        response = self.client.post(self.url, self.valid_data, format='json')
        self.assertEqual(
            response.status_code, status.HTTP_500_INTERNAL_SERVER_ERROR
        )
        self.assertEqual(response.data['error'], 'SMTP connection error')
        # Verify that the send method was called once
        mock_send.assert_called_once()

    # test for invalid form fields
    def test_send_email_invalid_form(self):
        response = self.client.post(self.url, self.invalid_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('errors', response.data)
