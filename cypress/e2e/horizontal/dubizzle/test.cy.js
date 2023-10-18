// const { method } = require("cypress/types/bluebird");
/// <reference types="Cypress" />

describe('testing cypress', function() {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })

    // let currentTestDescription;
    beforeEach(() => {
        window.testFlow = [];
        // cy.on('test:before:run', (test) => {
        //     currentTestDescription = this.title;
        //   });
    });

    it('testing TC', () => {

        cy.step("Visit dubizzle")
        cy.visit(Cypress.env('BASE_URL'))
        cy.reload()

        cy.step("Verify the expected URL")
        cy.url().should('be.equal', Cypress.env('BASE_URL'))
        
    })

    it('should login', function() {
        cy.step("Visit dubizzle")
        cy.visitDubizzle()

        cy.step("Click on Login button")
        cy.get("button[aria-label$='Login']").click()

        cy.step("Click on continue with email login method")
        cy.get("._1075545d.a67fa1b7._42f36e3b.d059c029._858a64cf > :nth-child(3)").click()

        cy.step("Type valid email")
        cy.get('#email').type(Cypress.env('EMAIL'))

        cy.step("Click on next button on login popup")
        cy.get("button[type='button']").click().wait(5000)

        cy.step("Type valid password")
        cy.get('#password').type(Cypress.env('PASSWORD'))

        cy.step("Click on login click button to login dubizzle")
        cy.get("button[type='button'] > span").click()

    })

    it("login", ()=> {
        cy.login()
        
    })

    afterEach(() => {
        cy.PassPresentation(this.fullTitle())
      }); 
})
