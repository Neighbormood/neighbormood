# Neighbormood - Tune into your emotional wellbeing

This repository contains the code for the back-end and the front-end of the Neighbormood app.
You can access the app at [neighbormood.github.io](https://neighbormood.github.io)

## The frontend
Vue.js is our front-end tool of choice and (the build artifact) is hosted as a single page web-app on `neighbormood.github.io`
To deploy the front-end:
  * execute `npm run build` in the client folder.
  * copy and paste the build artifacts into another repository and setup github pages there.

## The backend.
The backend code is a flask app hosted on heroku at `neighbormood.herokuapp.com`. The app relies on PostgreSQL as the database.
The database schema is as seen in `database.sql`

