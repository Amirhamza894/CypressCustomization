describe('testing cypress', function() {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })

    it('testing TC', () => {
        cy.visit(Cypress.env('BASE_URL'))
        cy.url().should('be.equal', Cypress.env('BASE_URL'))
    })

    it.only('should login', () => {
        cy.visit(Cypress.env('BASE_URL'))
        cy.get('._1b04dcc1 > ._261203a9').click()
        cy.get('._21b291bd > :nth-child(3)').click()
        cy.get('#email').type(Cypress.env('EMAIL'))
        cy.get('.a755fcd9 > button').click()
        .wait(5000)
        cy.get('#password').type(Cypress.env('PASSWORD'))
        cy.get('.a755fcd9 > ._5fd7b300').click()

    })

})
