describe('testing cypress', function() {

    it('testing TC', () => {
        cy.visit(Cypress.env('BASE_URL'))
        cy.url().should('be.equal', Cypress.env('BASE_URL'))
    })

})
