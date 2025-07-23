# React App Walkthrough

In this lesson, we’ll dive into the process of setting up a basic React app. React is a popular JavaScript library for building user interfaces, particularly for single-page applications (SPAs). Before we get into coding, it’s important to have the necessary tools installed.

### Step 1: Install Node.js and npm
To start, you need to install Node.js because it comes with npm (Node Package Manager), which is essential for managing dependencies in a React project.

1. Visit Node.js official site.
2. Download and install the latest version according to your operating system (Windows, macOS, or Linux).
3. Verify the installation by opening your terminal or command prompt and typing the following:

node -v

This should display the installed Node.js version.

npm -v

This command will display the npm version.

### Step 2: Install VS Code
For this course, we’ll use Visual Studio Code (VS Code) as our code editor. If you don’t have it installed, download it from here.

### Step 3: Create a React App
Now that we have Node.js and npm installed, let’s create a basic React app.

1. Create a Project Folder: Open VS Code and create a new folder for your React project. Let’s name it basic-react-app.
2. Open Terminal in VS Code: Use the built-in terminal in VS Code by navigating to Terminal -> New Terminal.

Create React App

1. Create a new React app: Open your terminal and run the following command to create a new React app using Create React App without installing it globally:
npx create-react-app your-app-name

Replace "your-app-name" with the desired name for your React app.
2. Navigate to the project directory: Change into the newly created app directory using the following command:
cd your-app-name

3. Run the development server: Start the development server to see your React app in action. Run the following command:
npm start

This will start the development server and open your app in a new browser window.

By default, this command starts the development server on localhost:3000, which is the default port. To view the app, simply open a browser and go to:

http://localhost:3000

### Step 4: Explore the Project Structure
Let’s explore the folder structure that was created:

- node_modules: Contains all the dependencies for the project.
- public: This folder contains the HTML file and assets like images, logos, and static files.
2. index.html: The main HTML file where the React app is injected.
- src: This is where the main app components and logic are written. 
1. App.js: The main React component. When you run the app, this is the file that gets rendered.
2. index.js: The entry point of the React app. This file contains the code that injects the app into the root div in the HTML file.
\
### Step 5: Modify the React App
Let’s modify the App.js file to add some custom content.

1. Open src/App.js in VS Code.
2. Modify the file as shown below:
<pre>
import React from 'react'; import './App.css'; function App() { return ( <div className="App"> <header className="App-header"> <h1>Welcome to My React App</h1> <p>Edit <code>src/App.js</code> and save to reload.</p> </header> </div> ); } export default App;
</pre>

Save the file and go back to your browser. You’ll see the changes automatically reflected because the React development server supports live reloading.

### Step 6: Understanding the React Rendering Process
React uses components to manage different parts of a web page. In the example above, we modified the App component, which is then rendered in the browser. Let’s break down the key parts of how React renders this content:

- The index.html file located in the public folder contains a div with an ID of root. This is where React will inject the content.

<pre><div id="root"></div></pre>


- In src/index.js, React creates the root element and renders the App component into it using the following code:
<pre>
import React from 'react'; import ReactDOM from 'react-dom'; import './index.css'; import App from './App'; ReactDOM.createRoot(document.getElementById('root')).render(<App />);
</pre>
- ReactDOM.createRoot is used to create a root element.
- render(<App />) injects the App component into the root element, thus rendering it on the web page.

### Step 7: Changing the Title and Favicon
If you open public/index.html, you can change the title and favicon of your app. For example:

- Change the title:
<pre>
<title>My First React App</title>
</pre>
- Change the favicon:Replace the link to the React favicon with a link to your own favicon in the public folder.

### Conclusion
You have now successfully set up a basic React app! In this lesson, we covered:

- Installing Node.js and VS Code.
- Using npx create-react-app to initialize a React app.
- Modifying the App.js file to display custom content.
- Understanding how React renders components using ReactDOM and the root element.

In the next lessons, we will dive deeper into React components, states, props, and other essential concepts that will help you build powerful React applications.