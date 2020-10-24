const functions = require('firebase-functions');
const express = require("express");
const cors  = require("cors");
const stripe = require("stripe")
('sk_test_51HeESrEadnBlyJHvXseUYxxdexcjUWxj0pLCD8bxINXuarE1DDfki0EUFIe1qSmuKvJHGNBDt8SvjmHpDB5T7DSW00NTKM42o7')

//API

// - App COnfig
const app = express();

// - Middlewares
app.use(cors({ origin:true }));
app.use(express.json());

// - API route
app.get('/',(request,response) => response.status(200).send('Hello'))

app.post('/payment/create', async (request,response) => {
    const total = request.query.total;
    
    console.log('Payment Request Received!!! for this amount>>',total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //sub currency
        currency: "inr",
    });

    //Ok -Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})


// - Listen Command
exports.api = functions.https.onRequest(app)

//Example end point
// /http://localhost:5001/stationary-online-store/us-central1/api

