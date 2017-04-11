# TwitterLoginTest

This small project creates a meteor app that allows users to login to their Twitter Account.



1. Clone the repository.


2. Install the node modules:

  ```
  meteor npm install
  ```
  
3. Create a Twitter Developer App [here](https://apps.twitter.com/app/new).

  For the website: http://127.0.0.1:3000/

  For the Callback URL: http://127.0.0.1:3000/_oauth/twitter
  
  Make sure 'Allow this application to be used to Sign in with Twitter' is checked


4. Create a settings.json file in the main folder that contains the following:
  
  {
   
   "public": {
    
    "twitter": {
      
     "consumerKey": "< COPY CONSUMER KEY FROM TWITTER API SITE >" 
     
     }
      
    },
    
   "twitter": {
    
     "consumerSecret": "< COPY CONSUMER SECRET FROM TWITTER API SITE >" 
      
    }
    
  }

5. Run the app: 

  ```
  meteor --settings settings.json
  ```

