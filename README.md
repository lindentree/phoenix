<h1>Peace</h1>

Our app is designed to help domestic violence survivors. Peace is a website designed to help survivors get immediate access to local shelters and contact loved ones discreetly about being in a dangerous situation without leaving a record on their own phones.

The alpha version is live here: https://phoenix-seven.vercel.app/

The front-end was built in Gatsby: https://www.gatsbyjs.org/ and can be run with `gatsby develop` from the root directory of this project after you clone it down.
The local Express/Node.js server can be run simultaneously, but you will need your own Twilio credentials: https://www.twilio.com/docs/sms/quickstart/node
The production server is deployed to a Digital Ocean Droplet.

There is a Heroku PostgreSQL set up by way of Hasura:https://hasura.io/ but the GraphQL and Auth0 integration is not complete.
