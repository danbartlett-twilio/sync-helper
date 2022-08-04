# twilio-table


## A Twilio-Native Persistence Layer for Demos and POCs (alternative to AirTable and similar)

1. Twilio Sync
2. Twilio Functions for CRUD to Twilio Sync
3. Single Page Application GUI

Download this repo, run  twilio login if needed, then twilio serverless:deploy

That will deploy a Runtime Service. Paste the asset url ending in /index.html into a web browser to complete the set up and start using!

You will also need to create a sync service and paste the SID into the .env file.

1. Download this repo (clone or zip)
2. To utilize this repo you will need to Install the [Twilio CLI](https://www.twilio.com/docs/twilio-cli/getting-started/install) and the [Twilio Serverless Toolkit](https://www.twilio.com/docs/labs/serverless-toolkit/getting-started#install-the-twilio-serverless-toolkit)
3. Create a sync service on the Twilio Console
4. Paste the sync service SID into the sample.env file
5. Rename sample.env to .env
6. Run `twilio login` if needed, then `twilio serverless:deploy`
7. That will deploy a Runtime Service.
8. Copy and Paste the asset url ending in /index.html into a web browser to complete the set up and start using!

## Video Tutorials

### [TwilioTable Installation and Configuration](https://youtu.be/f8qunHlClZ4)

### [Using TwilioTable with Studio](https://www.youtube.com/watch?v=f-ZY194B2f4)


## Single Page Application

The source code for the single page application is writting in Vuejs 3 and it is in this repo. You are welcome to develop locally to customize or extend TwilioTable. Run `npm run dev` from the twilio-table/client-src/twilio-table/ directory to figure up a local dev server.

Run `npm run build` to build a new version of the SPA. The files get placed in the /assets directory and will get deployed when running `twilio serverless:deploy` from the root directory.

## Disclaimer!

TwilioTable works pretty well but there are likely some bugs! Let me know if you find any, or better yet, fix them and make a pull request!

## Local Development

If you want to extend the TwilioTable client source code, you can make changes in twilio-table/client-src/twilio-table/. Edit the file "twilio-table/client-src/twilio-table/.env.development" with the domain to your Twilio Serverless Service to be able to make http calls from your local machine. You can edit and deploy the Twilio Functions as needed.
