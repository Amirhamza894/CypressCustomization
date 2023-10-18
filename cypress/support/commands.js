// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.overwrite('log', (subject, message) => cy.task('log', message));

// ----- Staging basic auth ----
Cypress.Commands.add('visitDubizzle', ()=> {
  cy.visit(Cypress.env('BASE_URL'), {
    auth: {
      username: Cypress.env('stageUserName'),
      password: Cypress.env("stagePassword")
    }
  })
})

Cypress.Commands.add("homeBanner", ()=> {
  cy.request({
    method: "POST",
    url: "https://ovation.dubizzle.com.eg/ingest/bannerMetric/",
    body: {
        "app_type": "web_desktop",
        "banner_identifier": "W-banner-1",
        "client_device_id": "lkb1d59szkgzyof9p",
        "client_session_id": "e76ef5ab-08e8-4b30-be61-7e7b08d5b592",
        "client_user_external_id": "e76ef5ab-08e8-4b30-be61-7e7b08d5b592",
        "metric_action": "view"
    }
}).then((Response) => {
    expect(Response.status).eq(201)
    let actualValue = Response.body[0].app_type
    expect(Response.body[0].app_type).to.eq("web_desktop")
})
})

