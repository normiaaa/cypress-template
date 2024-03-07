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

Cypress.Commands.add("loginViaApi", () => {
  cy.session("user", () => {
    cy.request({
      url: `${Cypress.env("baseUrl")}/login`,
      method: "POST",
      body: {
        email: Cypress.env("email"),
        password: Cypress.env("password"),
      },
    });
  });
});

Cypress.Commands.add("loginViaUi", (user) => {
  cy.session("user", () => {
    cy.visit(Cypress.env("baseUrl"));
    cy.get("#email").type(user.email);
    cy.get("#password").type(user.password);
    cy.get("#submit").click();
    cy.url().should("include", "home");
  });
});

Cypress.Commands.add("getByTestID", (testID) => {
  return cy.get(`[data-testid="${testID}"]`);
});
