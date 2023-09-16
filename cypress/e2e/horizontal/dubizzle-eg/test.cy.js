describe('testing cypress', function() {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })

    it('testing TC', () => {
        cy.visit(Cypress.env('BASE_URL'))
        cy.url().should('be.equal', Cypress.env('BASE_URL'))
    })

    it('should login', () => {
        cy.visit(Cypress.env('BASE_URL'))
        cy.get("button[aria-label$='Login']").click()
        cy.get("._1075545d.a67fa1b7._42f36e3b.d059c029._858a64cf > :nth-child(3)").click()
        cy.get('#email').type(Cypress.env('EMAIL'))
        cy.get("button[type='button']").click()
        .wait(5000)
        cy.get('#password').type(Cypress.env('PASSWORD'))
        cy.get("button[type='button'] > span").click()

    })

    
})
