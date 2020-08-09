require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 3000;

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

console.log(accountSid, authToken, twilioPhoneNumber)
console.log()
const client = require('twilio')(accountSid, authToken);

const MessagingResponse = require('twilio').twiml.MessagingResponse;

// Configure Passport to use Auth0
const strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL:
      process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
  },
  function (accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  }
);

passport.use(strategy);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.get('/', (req, res) => {
  res.send('Hello World! change the URL to hopefully see some json info.')


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
         to: req.body.mobile_number
       })
      .then(message => console.log(message.sid));
})


//This only works if you have twilio CLI installed (need a twilio account)
// To get this functionality, you need to run this server
// And then run this command: twilio phone-numbers:update "+15017122661" --sms-url="http://localhost:3000/api/sms"

app.post('/api/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
