                                                  
// ---- Login Steup -----

Cypress.Commands.add("login", ()=> {
    let accessToken;
    let refreshToken;
    let idToken;
    cy.step("login Authentication Request")
    cy.request({
        method: 'POST',
        url: 'https://auth.stage.dubizzle-eg.run/auth/realms/olx-eg/protocol/openid-connect/token', // baseUrl is prepend to URL
        form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
        body: {
            grant_type: 'password',
            client_id: 'frontend',
            scope: 'openid',
            type: 'email_password',
            email: 'amir.hamza@empglabs.com',
            password: 'Testing123'
        }
    }).then((Response) => {
        cy.step('Store the data locally')
        expect(Response.status).to.eq(200)
        accessToken = Response.body.access_token
        refreshToken = Response.body.refresh_token
        idToken = Response.body.id_token

        // Perform the login session
        cy.step("inject the token")
        cy.LoginSession(accessToken, refreshToken, idToken)
    })
})

Cypress.Commands.add('LoginSession', (accessToken, refreshToken, idToken)=> {

    // Use the tokens to perform actions, e.g., make authenticated requests
    cy.request({
      method: 'POST',
      url: 'https://stage.dubizzle-eg.run/api/keycloak/session',
      body: {
        accessToken: accessToken,
        refreshToken: refreshToken,
        idToken: idToken
      },
    });
});


