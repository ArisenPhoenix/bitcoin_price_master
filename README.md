This Is The Documentation For 
Bitcoin Price Master Created
At The Behest of Toggle.
## Preparation
### Services Required
- Vercel
- AWS - dynamoDB
- Auth0
- GitHub (of course!)
- Google Cloud

### Environment Variables Required:
- AUTH0_BASE_URL
- AUTH0_CLIENT_SECRET
- AUTH0_CLIENT_ID
- AUTH0_ISSUER_BASE_URL
- AUTH0_SECRET
- NEXT_PUBLIC_AUTH0_BASE_URL
- TOGGLE_AWS_API_VERSION
- TOGGLE_AWS_REGION
- TOGGLE_AWS_SECRET_ACCESS_KEY
- TOGGLE_AWS_ACCESS_KEY_ID


# ATTENTION REQUIRED
## For  AWS AND Google Console AND AUTH0 You will receive a SECRET and A key Both AUTH0 and AWS REQUIRE THESE to be saved and stored into your file which stores all your envs
### THESE SECRETS ARE ENVS AND YOU MAY ONLY SEE THEM ONCE
### THE GOOGLE INFO IS NEEDED FOR AUTH0
### THE AWS INFO IS NEEDED FOR ENVs
### WITHOUT THIS INFORMATION THIS PROJECT WILL NOT WORK, AT LEAST NOT IN ITS ENTIRETY
### I HIGHLY RECOMMEND YOU STORE ALL THE INFORMATION YOU GET FROM THESE SERVICES INTO A SINGLE DOCUMENT PREFERABLY AS ENVS SO IT IS ALL DONE WITHOUT SCRAMBLING AND RESEARCHING

### Steps
- Clone The GitHub Repository
- Make a pull request to your local environment
- Create an account for the services mentioned above:
- Fill In The Details For Each of The Environment Variables, none are optional


# Setup
## AWS

You need to create an AWS account here, this will be your root account
[aws](https://aws.amazon.com/account/sign-up)

### Steps:
- Create an account and follow the procedure for signup - this does require a Credit/Debit card
- Create an IAM account for more security, it will allow you to limit access to only what you allow.
- For The IAM account you will need to add which services it is allowed to access, you just need to scroll down and select all for dynamo.
- Copy and paste or write down the Amazon account id at the top right in the dropdown menu.
- Logout of the Root account and login to the IAM account you used.
- In the menu at the top left side, click, and go to /Databases/dynamoDB
- In There you will create a table, name the table Users
- Set the table to have a primary key named UserEmail and to be a "string" or "S". Ignore the Sort Key
- From here you just need the information detailed in the TOGGLE_AWS* envs.
- Save those envs into a file for later use in Vercel.

## Auth0
Create an account here: [auth0](https://auth0.com)
Just Know Auth0 has some tricky aspects 
it is the reason you will need to edit the codebase at all. 
Don't worry it's a small two lines of code which is just your own web address
You will have to Deploy Twice to Vercel only because of this small edit.


### Steps:
- SignUp at Auth0
- Get you Credentials and save them to a file of envs, preferably a .env file :)
- Once signed up push the Getting Started button in the top left corner
- This will take you to the... Getting Started Page. Push Create Application.
- Name it and Click Regular Web Applications, You can click Next.js in the next screen and follow along with them. Otherwise, click skip integration.
- From there you will see a good number of input boxes, some are unable to be tampered with because they are base defaults
- You may add a logo if you like, however it's not necessary for functionality.
- Go Down To Application URIs.
- In Allowed Callback URLs: add http://localhost:300/api/auth/callback
- In Allowed Logout URLs: add http://localhost:3000, it could be something else but generally people will be taken to a landing page, which is usually at root.
- In Allowed Web Origins: add anything that would redirect you to loging --> 
- in development mode i had http://localhost:3000/, http://localhost:3000/home
- Allowed Origins (CORS) is technically not needed usually, if you like to be safe rather than sorry in terms of your time (like me), copy and paste from the previous box into this one.
- You can change the token information below to your liking, again, not necessary for functionality here. It could pose some security risks or improvements depending on how you configure it and what case scenario or the sensitivity of the data you're working with.
- Now Add Into You Auth0 Envs the information stated therein, including the NEXT_AUTH0_BASEURL
- BASEURL is localhost:3000 until after your first Deployment and NEXT_AUTH0_BASEURL is the same
- <b>After your first Deployment CHANGE BOTH OF THESE ENVS TO YOUR NEW ROOT WEB ADDRESS/URL </b>
- You need a Google Cloud Account and get the necessary information for that so that you may log users in. So go there and follow those steps which will point you back to Auth0
- Done For Now, 
- <b>You'll have to come back here and change all these boxes to reflect your website, after it deploys to Vercel. </b>
- Moving Forward --->



## Google Cloud
Create an account here: [googleCloud](https://cloud.google.com/)

### Steps:
- SignUp at Google Cloud, the console can be overwhelming if first seeing it but don't worry.
- Once Signed Up create a project and name it whatever you like.
- Inside that project you search for CREDENTIALS with sub text saying APIs & Services
- Inside there you need to click Create Credentials, then select OAuth client ID
- Application Type: Web Application
- Name: Give it the same name you named your app in Auth0
- Authorized JavaScript Origins: add nothing for now, but you will be coming back to it.
- Authorized Redirect URIs: you will need to type your developer keys into it + /login/callback
- Save it and keep moving

## Vercel
Create an account here: [vercel.com](https://vercel.com)

### Steps:
- SignUp at Vercel, you can use your GitHub Account
- You will need to give vercel permission to access your GitHub account, it will need to access your project so that it can be deployed.
- Find the project that your forked then click on it, now vercel will ask for a bit more information.
- The only thing necessary to configure at this point is that you will need to add all those envs and put them in 1 by 1.
- If you have them handy it's simple enough and copy and pasting feels good at this point.
- Click deploy "I believe it's a button at the end saying Deploy" to build your application and should it be successful after about a minute of doing all its checks, however, you cannot log in at this stage.

Deployment Side Note:
If there are errors I am completely at fault, or actually I have had a case where All Scripts were correct 
but there was a file that was downloading as empty when running yarn or npm add/install. 
It caused me major headaches for about 5 hours, I couldn't even start another project locally and install all the packages without errors.
Moving the file from the base project did solve the problem, however.
Eventually I called it a night and went to bed and, of course, it was installing the package properly and deployed without ever editing my base code.

Moving on...


If your deployment was successful, congratulations! It's not working...

## Finally
### Steps:
- Get your new PRODUCTION LINK or at least the link you will be using at the moment for testing. But the production link is the cleanest and least prone to typos
- You need to take this link to your Google Console OAuth setup and add in your website name to refer to the [Google Console] section again.
- Go to Auth0 and add or replace all the localhost spelling with your new-found web address, make sure to add https, not http, refer to the Auth0 section for more specifics.
- Last Part, your actual code edit inside the app.js.
- Inside the UserProvider there is a loginUrl part add:
- Change your Auth0 ENVS as described in the Auth0 section in <b> Bold </b>
- If you have a login problem but the site deploys fine then you can do the following below:

## loginUrl="https://<your-web-address-root>/api/auth/login"
## profileUrl="https://<your-web-address-root>/api/auth/me"
# It should look like the following:
```bash

<UserProvider 
loginUrl="https://<your-web-address-root>/api/auth/login"
profileUrl="https://<your-web-address-root>/api/auth/me"
/>
```

# Or Bigger:


## <UserProvider 
## loginUrl="https://<your-web-address-root>/api/auth/login"
## profileUrl="https://<your-web-address-root>/api/auth/me"
## />


# Push The Updated Code to your GitHub Clone and Wait Expectantly For The Magic To Happen.

# If All is Working or you want to try my Deployment, if it's still up at the time of reading this. At least for a month after this is written.

## Gameplay
- It's very simple
- Login using the Google button on the login screen, I haven't done any testing for the email and name inputs.
- Push Play if you are logged in
- Push a button up or down and try to guess if the price will go up or down in the next minute.
- Only one guess at a time
- You may not press a button while the minute is counting down. You can see the time left at the top.
- Once the minute is up it will get the current price and tell you if your guess was higher or lower, or perhaps even equal
- One point for a win
- Lose one point for bad guess
- No Consequence if it was a "tie", if it happens.