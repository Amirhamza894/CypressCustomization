const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
    projectId: 'aehhmk',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log (message) {
          console.log(message);
          return null
        }
      });

    },
    specPattern: [
      './cypress/e2e/TestCases/*.js'
    ]
  },
  env: {
    // your base URL here
    BASE_URL: process.env.BASE_URL, 
    EMAIL: process.env.EMAIL,
    PASSWORD: process.env.PASSWORD,
    CYPRESS_RECORD_KEY: '7025f5c9-1eb2-4e62-96ec-8e1215ca65c2',
    stageUserName: process.env.stageUserName,
    stagePassword: process.env.stagePassword
  }

});
