# react-airbnb
### This is online experience landing page inspired by Airbnb using React and MDB Bootstrap.

Please execute code below to run the page.

NPM
Prerequisites

Before starting the project make sure to install Node LTS (12.x.x or higher). We are using yarn to start a project.

If you want to use package from npm you have to have a project with React. We recommend creating an app with create-react-app from react for begginers.

Step 1

### Create React App. We are using React 17+ version.

TERMINAL
npx create-react-app my-app

Step 2

Navigate to app's directory

TERMINAL
cd my-app
MDB installation

Step 1

### Setup MDB

TERMINAL
npm i mdb-react-ui-kit
Font Awesome

### Install Font Awesome.

TERMINAL
npm i @fortawesome/fontawesome-free
CSS import

### Add the following lines in your index.js file before the App.js file import:

INDEX.JS
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
Roboto font

Add the following line in public/index.html file inside head section:

INDEX.HTML
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
Set font family in globally css file for example src/index.css inside src folder as in the example:

INDEX.CSS
body {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
