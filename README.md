# Nature Counter



## Deps

- react-native-email-link
  - For opening client mail app
  - https://github.com/flexible-agency/react-native-email-link

### Conditions

- if user has not verified their email, then they will be shown a "verify email" banner on the home screen. 

## Backend Routes 

All routes are on localhost:3000 while running the backend server in natureCounterServer.
Schemas can be found at natureCounterServer/models

- /articles (get, post, delete)
- /articles/:articleId (get, put, delete)
- /benefits (get, post, delete)
- /benefits//:benefitId (get, put, delete)
- /userdetails (post)
- /userdetails/:userId (get, put, delete)
- /usergoals (post)
- /usergoals/:goalId (put)
- /usergoals/:goalId/:activityId (put)
- /symptoms (get, post, delete)
- /symptoms/:symptomId (get, put, delete)
- /user_details_views/:userId (get)
- /user_goals_views (get)
- /user_goals_views/:goalId (get)
- /healthCategories (get)
- /natureAreas (get)

## How to run server

1. move to server directory :
```bash
cd natureCounterServer
 ```

2. install dependencies:
```bash
npm install
 ```
3. run server:
```bash
npm run start
 ```
