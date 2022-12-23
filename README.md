The application has a menu, a form and a list, to perform CRUD operations. I hope you like it, regards.

This project was developed as follows:

frontend: reactjs hooks - antD (for components design)
## Available Scripts

In the frontend directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open (http://localhost:3000) to view it in the browser.




backend: nodejs - expressjs
## Available Scripts

In the backend directory, you can run:

### `nodemon src/index.js`

Runs the server in port 4000<br>
If nodemon dosent work you have to run:
### `npm install -g nodemon --save-dev`
And remember to install the bbdd



## Dont forget to run
### `npm install`
in both cases frontend & backend



BBDD: sql postgresql
### bbdd.sql
In the root of the project there is the SQL file for bbdd, it is optional to add a duty
### Must set a new password
The database connection data is in /src/pgdatabase.js file
You need to change the password




frontend:
### `npm run build`
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
