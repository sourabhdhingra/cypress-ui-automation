const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "r6asp2",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
