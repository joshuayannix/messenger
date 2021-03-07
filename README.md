This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Technology Used:
This is a React chat app using functional components. Meessages are live updated and stored on a Firebase.js Firestore database. Redux is used to keep track of the user. Firebase is also used to host this project, and for the Google authentication login page. React Context API is used to toggle the dark and light mode at the top. React Router is used for page navigation.

Once inside the chatroom, the messages will change view depending on who is logged in. The user will see all their own current messages in blue and on the right side, and will be able to delete them. Anyone else's messages will show up in grey. The user can click the red buttom at the bottom right to delete all messages, and they can log out by clicking on their profile picture at the top.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
