describe('testing cypress', function() {

    it('testing TC', () => {
        cy.visit(Cypress.env('CYPRESS_BASE_URL'))
        cy.url().should('be.equal', Cypress.env('CYPRESS_BASE_URL'))
    })

})
