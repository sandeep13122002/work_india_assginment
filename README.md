# work_india_assginment

## Description
Goal is create Api with Mentione Endpoints
Requirements
1. Register a User
Create an endpoint for registering a user.
2. Login User
Provide the ability to the user to log into his account
3. Add a New Train
An endpoint for the admin to create a new train with a source and destination
4. Get Seat Availability
Create an endpoint for the users where they can enter the source and destination and fetch all the trains between that route with their
availabilities
5. Book a Seat
Create an endpoint for the users to book a seat on a particular train
6. Get Booking Details
Create an endpoint for the users to get its all booking details

Mandatory Requrement:
1. You need to protect all the admin API endpoints with an API key that will be known only to you and the admin so that no one can add
false data to your system.
2. For booking a seat and getting specific booking details, you need to send the Authorization Token received in the login endpoint.

TECH USED:
  Node.js, Express.js, Prisma, PostgresSQL

STEPS TO RECREATE THIS PROJECT LOCAL HOST

Step 1:
     Create empty folder with name demo
     open terminal in that folder
     Run Command git clone https://github.com/sandeep13122002/work_india_assginment.git .

step 2:
    Run Command  npm install
    It will install all packages required to run this project

step 3:
    Database Setup
    I have used cloud based PostgresSQL service neon
    we have to set up account on neon using google account
    Then Select PostgresSQL on database on Dashboard and proceed according to steps
    Copy DB_URL STRING AND SAVE IT

step 4:
     set up .env file in root folder to set up environment variables
     -Create .env file in root project folder
     DATABASE_URL=""
     NODE_ENV=development
     SECRET_KEY=
     ADMIN_API_KEY=

     For DATABASE_URL copy string URL you copied at postgres sql on neon
     For SECRET_KEY AND ADMIN_KEY COPY Random value of character or generate it from free online tools

Step 5:
     I have used Prisma to interact with postgresSQL
     RUN Command
     npx prisma db push
     It push your all Schema mentioned in Schema.prisma file to remote neon PostgresSQL Database and creates tables

NOW DATA BASE IS SETUPED AND ENVIORNMENT VARIABLES ARE SETUPED 

setp 6:
    To Run SERVER
    node.js index.js
    RUN THIS COMMAND IN terminal 
    "SERVER START"

END POINTS
     I have also added screenshot of all endpoints in PROJECT_SCREEN_SHOT FOLDER YOU CAN REFER TO THAT Also

     USE POST MAN TO TEST API

     REGISTER USER ENDPOINT
 POST   http://localhost:5000/auth/register

    ADD USERNAME AND PASSWORD AS RAW JSON IN BODY 
       EXAMPLE: {
   "username":"sandeep",
   "password":"sandeep"}

    LOGIN USER ENDPOINT
POST http://localhost:5000/auth/login
       ADD USERNAME AND PASSWORD AS RAW JSON IN BODY 
       EXAMPLE: {
   "username":"sandeep",
   "password":"sandeep"}

    Add TRAINS END POINT 
    It is for admin to add trains in database with API Key which only admin have
POST http://localhost:5000/service/add_trains

    add source destination and seatsAvailable in json and ADMIN API KEY IN HEADER
    example:
    {
      "source":"City Z",
      "destination": "City Y",
      "seatsAvailable":100
     }
     In Header add api key as following
     x-api-key : jsrlgslofqklrlurxgefwdqnkyhkygldpxbxvrhfecvdvhcctxsokfoipwobxlonijwirlmeeeecnvapyibztijvxjsshdtqsdqfjqhkkgklydibcuzvhtekinouzvpx

    GET TRAINS END POINT
    It will fetch all trains between sorce and destination
GET http://localhost:5000/service/get_trains?source=City A&destination=City B
     
     BOOK TRAINS END POINTS
POST http://localhost:5000/service/booking
   
   example of body:
   {
    "trainId":1
   }
  
    USER BOOKING DETAILS ENPOINT
GET http://localhost:5000/service/user_booking



       

