# My first Backend Project

Hi everyone! I'm glad to present you all my first backend project. Here you'll find some APIs with different functions (GET, POST, PUT and DELETE). In this case, you'll be able to create payments and get a payment ID for each one. Once you've got it, you can find, update and delete the payment (list all payments is also possible). 

I had this idea because of my last job. As you may know, I worked for Stripe 4 years long as a customer service agent, there I learned some basic things about programming and also got interested about the Stripe API. Now I'm really excited because I've learned how the APIs work. 

Below you'll find further information on how I created this API and how to use it. Hope it will be useful to you all!

---

## HOW WAS THIS API CREATED?

In order to create this API, I used Node.js, Express and Mongoose.

- Create a new GitHub repository and clone it to my local device
- Initiate Node.js using the terminal and configure it
- Create the Index.js file in order to start the project
- Make sure the "type": "module" has been already added to the package-json
- Install Express
- Create another file for the application. There we'll need to import express
- .gitignore should be created to add the node_modules there
- Install Nodemon using the command: npm install --save-dev nodemon (this will help us to update our project without needing to stop and initiate it)
- Morgan should be installed 
- Install Mongoose and import it to a previous created file called "ConnectionDB.js". Mongoose will allow us to conect our project to ATLAS using a string 
- Install dotenv (the string used to connect our project to ATLAS should be stored in another file called .env and then, this file will need to be added to .gitignore). Without dotenv this won't be possible.
- Once the project is ready, the Routes, Drivers and Models should be created. 
- Test the APIs. 

---

## HOW TO USE THIS API?

- Download Postman and create an account (if you don't have one yet)
- Using GET, you'll be able to use the following routes: (localhost:3001 - Root, localhost:3001/payments - list all payments, localhost:3001/idofthepayment - find information about one payment using their ID).
- POST is used to create payments, so if you want to create one, you can use the port: localhost:3001/payments with POST. The parameters are the following: 

         {
        "customer_name": "",
        "payment_amount": ,
        "currency": "",
        "country": "",
        "date": "",
        "tax_applied": "",
        "Email_Address": "",
        "Billing_Address": "",
        "Shipping_Address": "",
        "Phone_number": 
         }

Bear in mind that you should use a Json format and fields like payment amount and phone number are numbers, so you don't need to use the "" since those are intended for strings.

- If you want to update a payment, it's possible using the payment ID. Just use the port localhost:3001/payments/ID and change the information.

- Lastly, in case you want to delete a payment, just use the same port (localhost:3001/payments/ID) and click on "send". 
---

# Developed by:

Erika GC.





