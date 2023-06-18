describe('testing cypress', function() {

    it('testing TC', () => {
        cy.visit('https://www.dubizzle.com.eg/en/')
        cy.url().should('be.equal', 'https://www.dubizzle.com.eg/en/')

    })
})