# TypeScriptTask
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
It is the UI of an ECommerce web application written with TypeScript and React.

# Running and Configurations (Modified from React docs)
This project requires installation of JavaScript node package and TypeScript on your local machine.

To run the project, first clone this repository and in the project directory, run:

### `npm install`

This installs all the node dependencies needed by the application. After complete installation, run

### `npm start`

This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
(Check the README file within the agentlyUI folder for other available run commands and directives for testing and deployment).


# Folder Structure
On the outskirts, the folder structure for this project is like every other React project--with a public and an src folders and an App.tsx file which serves as the entry point of the app. 

However, the contents of the src folder has been structured to accomodate future integrations, scaling and uphold atomicity. within the folder:

- The components folder holds all purely reuseable react components. Since the logic is small, the styling of the components in this folder is integrated within each component file.

- The data folder holds different data in json format. These data either mocks response objects from a server or helps to ensure cleaner code, loose coupling and reuseability.

- Hooks folder contain custom hooks which can be used by any component.

- The styles folder contains general, loosely coupled styles which is accessible to all components. Owing to the scale of this project, this folder was not fully developed.

- The pages folder contain components which represent an entire page within the application. e.g Home page. Each page within this folder is defined as a sub folder containing 
    1. an index file, which is the entry point, 
    2. a main component file which bears the exact name of the folder, 
    3. a styling file which can have a .style extension and
    4. an extra component file(s), which are components that are closely tied to the page in question.

- Templates are components which are strung together to make up a page. They are built atop pure components and jsx elements and combined to produce pages of the application. e.g NavBar component. Each template is also structured as subfolders similar to that described in pages above.

- The utils are pure TypeScript functions/ services that are employed in the app.

NB: All component styling was done with the React styled component package. The assets of the project are found in the assets folder in the publc directory. The assets are divided into large images in .png extensions and icons in .svg extension. 
