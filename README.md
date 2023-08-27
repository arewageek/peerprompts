### Peer Prompt is an open source tool that allow you share AI-powered prompts with your peers and build an active community of AI users around yourself.

## Getting Started

1.  First step is to fork or clone this project into your desired directory
```git clone https://github.com/arewageek/peerprompts```

2.  Next step is to install all required dependencies
```npm install```

3.  Head over to https://console.cloud.google.com/apis and create a project, then get the Client ID and Secret to be updated below. These credentials allow you setup Google Provider (Next Auth) on the application

4.  Add the following information to your .env file
```
GOOGLE_CLIENT_ID = "Your client ID from"
GOOGLE_CLIENT_SECRET = "Your client secret"

MONGODB_URI="URI to your Mongo DB database"

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET="your SSL key"
```

Note: to generate the ssl key, you can run the following in your terminal
```openssl rand -base64 32```
Also, note that openssl is not automatically installed on windows, you can copy the command and head to https://cryptool.org/en/cto/openssl and paste the code in the terminal provided there
