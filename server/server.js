//To see it work, run "node server.js" and go to http://localhost:3000/api/sms

//Message Alexa on discord for the accountSid and authToken
const accountSid = "";
const authToken = "";
const client = require('twilio')(accountSid, authToken);


const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/api/sms', (req, res) => {
  res.send("Welcome to the Twilio experiment page. If you've put in your phone number, you should" +
  " soon be getting a message about the Kessel Run from a Twilio trial account.")

    //Change the to: "+----------" to your own phone number. Keep the same formatting of
    //[+][country code][phone number including area code]

    client.messages
      .create({
         body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
         from: '+16105954686',
         //Edit number here
         to: '+----------'
       })
      .then(message => console.log(message.sid));
})


//This only works if you have twilio CLI installed (need a twilio account)
// To get this functionality, you need to run this server
// And then say this command: twilio phone-numbers:update "+15017122661" --sms-url="http://localhost:3000/api/sms"
// And update the phone number above into the one that you're using
// And then finally reply to the number that the twilio message came from
app.post('/api/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(app).listen(3000, () => {
  console.log('Express server listening on port 3000');
});

