# TwitterLoginTest

1.) Clone the repository

2.) Install the node modules: 
  >> meteor npm install

3.) Create a settings.json file in the main folder that contains the following:
  {
    "public": {
      "twitter": {
        "consumerKey": <COPY CONSUMER KEY FROM TWITTER API SITE> 
      }
    },
    "twitter": {
      "consumerSecret": <COPY CONSUMER SECRET FROM TWITTER API SITE> 
    }
  }

4.) Run the app: 
  >> meteor --settings settings.json

