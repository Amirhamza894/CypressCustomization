
// ---- Test Pass ----

Cypress.Commands.add('PassPresentation', (description) => {
            // Log the captured steps when the test passes
    if (Cypress.mocha.getRunner().test.state === 'passed') {
        cy.log("✅ " + "Test passed: " + description + " \n Test flow:");
        window.testFlow.forEach((step) => {
        cy.log("  " + step);
      });
    }
})