const { defineConfig } = require("cypress");
require('dotenv').config();


module.exports = defineConfig({
      defaultCommandTimeout: 10000,
    projectId: 'aehhmk',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: [
      './cypress/e2e/horizontal/dubizzle-eg/*.js'
    ]
  },
  env: {
    // your base URL here
    BASE_URL: process.env.BASE_URL, 
    EMAIL: process.env.EMAIL,
    PASSWORD: process.env.PASSWORD
  }

});
