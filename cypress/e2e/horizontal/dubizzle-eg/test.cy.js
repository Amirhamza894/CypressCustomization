describe('testing cypress', function() {

    it('testing TC', () => {
        cy.visit(Cypress.env('BASE_URL'))
        cy.url().should('be.equal', Cypress.env('BASE_URL'))
    })

    it('should login', () => {
        cy.visit(Cypress.env('BASE_URL'))
        cy.get('._1b04dcc1 > ._261203a9').click()
        cy.get('.c6ce5164._31a14546._42207ab4:nth-child(3)').click()
        cy.get('#email').type(Cypress.env('EMAIL'))
        cy.get('.a755fcd9 > button').click()
        cy.get('#password').type(Cypress.env('PASSWORD'))
        cy.get('.a755fcd9 > button > span').click()

    })

})
