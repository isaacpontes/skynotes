# Skynotes App

Looking for the API? You can find it here: [Skynotes API](https://github.com/isaacpontes/skynotes_api).

Skynotes is an app for writing notes and storing them online.

### Technologies Used

- Javascript
- React
- Bulma CSS Framework

### Running Locally

To run the app locally you will need the API to be running. You can set up the API following the instructions on the [API Repository](https://github.com/isaacpontes/skynotes_api).
After the API is ready and running you can do the following:

- Clone this repository with `git clone https://github.com/isaacpontes/skynotes`
- Access the app folder with `cd skynotes`
- Install the dependencies with `yarn`
- Create a file named '.env' on the root of the project with `touch .env` (*You can also do this and the next step on your code editor.*)
- Set the environment variable for the API with `echo "REACT_APP_BASE_API=http://localhost:3001" > .env` (*Remember to use the same port your API is running on.*)
- Run your app with `yarn start` and it should open automatically on [http://localhost:3000](http://localhost:3000)

### Live version

You can check the live version here: https://skynotes.netlify.app
