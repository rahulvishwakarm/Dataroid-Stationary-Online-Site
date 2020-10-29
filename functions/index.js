const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HeESrEadnBlyJHvXseUYxxdexcjUWxj0pLCD8bxINXuarE1DDfki0EUFIe1qSmuKvJHGNBDt8SvjmHpDB5T7DSW00NTKM42o7')

//API


//App Config
const app = express();

//Middle wares
app.use(cors({ origin: true}));
app.use(express.json());


//API routes
app.get('/',(request,response) => response.status(200).send('Hello World'))

app.post('/payment/create',async (request,response) =>{
    const total = request.query.total;

    console.log("Payment Request Received Boom!! for the amount >>>",total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency:"inr",
    });

    //Ok-Created
    response.status(201).send({
        clientSecret:paymentIntent.client_secret
    })

})

//Listen Commands
exports.api = functions.https.onRequest(app);

//Example Endpoint
//http://localhost:5001/stationary-9b162/us-central1/api





