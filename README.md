This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test` or `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## USING TESTS ON REACT WITH REACT-TESTING-LIBRARY 

It is a library based on Jest framework for JavaScript. 
The react-testing-library is recomended by the React documentations for  testing components.
It is already installed with react-create-app.


Tutorial - rtl-test-tutorial

- Check on Pakage.json the script for test:
  "test": "react-scripts test"

- All tests are in the folder ./src/__tests__ 

- Files that test JavaScript functions;
  mathCounts.js
  mathCounts.test.js

- Files that test assynchronous functions:
  Callback.test.js 
  Promise.test.js
  Asyncawait.test.js

- Testig the App render;
- Testing render a especific component.
- Testing the interaction between the user and forms (inputs), changing the UI.
  App.js
  ValidaEmail.js
  App.test.js

- Testing the App render with Routes (renderWithRouter);
	testRenderRoutes.js
	RenderWithRouter.js
	renderWithRoutes.test.js

## Documentation
React Testing Library - https://testing-library.com 
Queries - https://testing-library.com/docs/react-testing-library/cheatsheet