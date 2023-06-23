describe('testing cypress', function() {

    it('testing TC', () => {
        const BASE_URL = Cypress.env('base_url');
        cy.visit(Cypress.env('base_url'))
        cy.url().should('be.equal', BASE_URL)
    })

})
