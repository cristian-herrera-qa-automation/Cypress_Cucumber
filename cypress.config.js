const Cucumber = require('cypress-cucumber-preprocessor').default;

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   specPattern:["**/*.feature", ".features", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
   // specPattern: '**/*.feature',
    setupNodeEvents(on, config) {
      on("file:preprocessor", Cucumber());
    },
    video: false,
    screenshotOnRunFailure: false,
    experimentalRunAllSpecs:true,   
  },
});
