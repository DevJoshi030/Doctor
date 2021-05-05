from ..models import Contact, Subscribe

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from ..serializer import ContactSerializer, SubscribeSerializer


class ContactView(APIView):

    serializer_class = ContactSerializer

    def post(self, request, format=None):

        serializer = self.serializer_class(data=request.data)

        if not serializer.is_valid():

            return Response({"Error": "Invalid Data"}, status=status.HTTP_400_BAD_REQUEST)

        firstname = serializer.data.get("firstname")
        lastname = serializer.data.get("lastname")
        email = serializer.data.get("email")
        phone = serializer.data.get("phone")
        message = serializer.data.get("message")

        new_contact = Contact(firstname=firstname, lastname=lastname,
                              email=email, phone=phone, message=message)

        new_contact.save()
        return Response({"Success": "Contact Added"}, status=status.HTTP_200_OK)


class SubscribeView(APIView):
   
    serializer_class = SubscribeSerializer
    model = Subscribe
    ExpiryDate = 9999999

    def post(self, request, format=None):

        serializer = self.serializer_class(data=request.data)
    
        if not serializer.is_valid():
            return Response({"Error":"Invalid Data"},status=status.HTTP_400_BAD_REQUEST)

        email = serializer.data.get("email")

        queryset = Subscribe.objects.filter(email=email)


        # (JETLA EMAIL PEHLE THI HASE ETLA NO ""QUERYSET"" BANSE
        # PA6I ENE APDE CHECK KARAVISHU K JO NEW EMAIL HASE TO DIRECT J SAVE THAI JASE,
        # NAITO EXISTING EMAIL HASE TO  PA6I SESSION CHECK KARSHU)


        if queryset.exists():

            if not self.request.session.exists(self.request.session.session_key):
                self.request.session.create()
            
            self.request.session.set_expiry(self.ExpriryDate)


            return Response({"Success Already":"Sunscriber Already Adde"},status=status.HTTP_202_ACCEPTED)

        new_subscribe = Subscribe(email=email)
        
        new_subscribe.save()

        if not self.request.session.exists(self.request.session._session_key):
            self.request.session.create()

        self.request.session.set_expiry(self.ExpiryDate)

        return Response({"Success":"Subscriber Added"},status=status.HTTP_200_OK)

class GetSubscribe(APIView):
    serializer_class = SubscribeSerializer
    model = Subscribe

    def get(self, request, format=None):

        if not self.request.session.exists(self.request.session.session_key):
            return Response({'Error': 'Not Subscribed'},
                            status=status.HTTP_400_BAD_REQUEST)

        return Response({"Success": "Subscribed Already"},
                        status=status.HTTP_200_OK)
