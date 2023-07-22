Task 05
- Create an HTML page with a grid of images covering full page (2 columns, 10 rows)
- Use AJAX or any other javascript method to load images from an api
- API will return list of objects, each object is for one image consisDng of 2 same images with different sizes.
- Load the smallest size images instantly in the grid
- Download the full size images through javascript
- Show full size images in the grid when fully loaded. 
- Load the full size image with an animaDon
API link for images: hCp://dashboard.familyindustriesapps.com/api/JSTask

Step For solving this:-
#How to test the task Step 1.1st install the node js to install all the dependancy and node pakage manager.By Running the below link to install node js https://nodejs.org/en

2.After this set up new react project with the help of the following command npx create-react-app react_task_5 #for installing new react app you can give any name as i give react_task_1 cd react_task-5#Changing directry to npm start #starts the development server that hosts your React application on port localhost with the port number 3000 by default

3.Then install bootstrip and react bootstrip by running the following command npm install bootstrap react-bootstrap #for installing bootstrip in react

4.Then add the following command In the index.js file located in the src folder, to import the Bootstrap CSS import 'bootstrap/dist/css/bootstrap.min.css'

5.Install axious.Axios is a popular JavaScript library used for making HTTP requests from a web browser or Node.js environment. It simplifies the process of sending asynchronous HTTP requests to APIs and handling responses. Axios supports various features, such as request and response interceptors, automatic JSON data parsing, and error handling.by using the following command we can add it
npm install axios # this command will install all the dependancy for axious

6.import axious to the main app.js file 


7.In a typical React project, the src folder (source) is the main directory where you store all the source code and assets related to your application. This folder contains the actual code that you write and is the heart of your React application

8.In react app app.js is main file where all our app related code is present

9.In src folder, create a new Component called Fetch_task5.jsx.Here all the code is present for how to fetch api 

10.Open the App.js file in the src folder and Import app.cssand Render Fetch_task5 Component
In the src/App.js file,
11.Save all the changes, and you should now have a React application that displays the grid of images fetched from the API. The smallest size images will load instantly, and the full-size images will be downloaded and displayed with a fade-in animation when they are fully loaded.
12.when i fetching the api i have one issue come which is core issue the api is not responding on the default(3000) so to solve this issue i create another file server.js in which i create my own server on port 3001 and here i allowed origion for this api   http://dashboard.familyindustriesapps.com/api/JSTask on port 3000 i start two terminal one running server.js file on port 3001 and other terminal running on port 3000 running the react file.i add the response of server.js file in Fetch_task5  tp show us output so by this way i can resolve  my issue .
