### Front-End Automation using Cypress

[Cypress](https://docs.cypress.io/guides/overview/why-cypress) is a next generation front end testing tool built for the modern web. This project will showcase how to use Cypress for writing UI automation test cases.
- Website to showcase Cypress test automation (https://react-shopping-cart-67954.firebaseapp.com/). Thanks to [Jefferson Riberio](https://github.com/jeffersonRibeiro) who works at [Mendix](https://www.mendix.com)
- Cypress will be used to write test cases for the demo websites.

1. Install cypress `npm install cypress --save` and not as dev dependency.
2. Run `npx cypress open`. Below window should open!
    ![Thumbnail](./resources/open-cypress.png)
3. From the window > choose Chrome > Start E2E Testing in Chrome.
4. Cypress will open a new Chrome browser and run the test cases. Below is the screenshot of the test cases running. From this window either add your own spec or use existing examples!
     ![Thumbnail](./resources/run-e2e-using-chrome.png)
5. While manually creating your spec make sure your file follows format `*.cy.js`
6. Select your spec `react-shopping-cart.cy.js` in this case.Selecting a spec will load the test run.
7. Cypress will run the test cases and show the results. Below is the screenshot of the test cases running.
    ![Thumbnail](./resources/run-cypress-spec.png)