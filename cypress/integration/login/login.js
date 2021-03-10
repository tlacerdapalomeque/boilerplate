///<reference types="Cypress"/>

describe("Test Login ", function () {
  beforeEach(() => {
    Cypress.config("baseUrl", Cypress.env("url"));
  });
  it("Should redirect to login", function () {
    cy.visit("/home");
    cy.location("pathname").should("eq", "/login");
  });
  it("Should redirect to login", function () {
    cy.visit("/user");
    cy.location("pathname").should("eq", "/login");
  });
  it("Should redirect to public", function () {
    cy.visit("/public");
    cy.location("pathname").should("eq", "/public");
  });
  it("Should not login a user that does not exist", function () {
    cy.visit("/login");
    cy.get('[data-cy="email"] ').click().type("wronguser@boilerplate.com", {
      log: false,
    });
    cy.get('[data-cy="password"]')
      .click()
      .type(Cypress.env("password"), { log: false });
    cy.get('[data-cy="submit"]')
      .click()
      .request("/login", { timeout: 15000 })
      .then("check alert ", () => {
        cy.contains("Cannot find user");
      });
    cy.location("pathname").should("eq", "/login");
  });
  it("Should not login a valid user with an invalid password", function () {
    cy.visit("/login");
    cy.get('[data-cy="email"] ').click().type(Cypress.env("email"));
    cy.get('[data-cy="password"]').click().type("Invalid@123", { log: false });
    cy.get('[data-cy="submit"]', { timeout: 15000 })
      .click()
      .request("/login", { timeout: 5000 });
    cy.contains("Incorrect password");
    cy.location("pathname").should("eq", "/login");
  });

  it("Should login to home", function () {
    cy.visit("/login");
    cy.get('[data-cy="email"]').click().type(Cypress.env("email"));
    cy.get('[data-cy="password"]')
      .click()
      .type(Cypress.env("password"), { log: false });
    cy.get('[data-cy="submit"]', { timeout: 15000 })
      .click()
      .request("/login", { timeout: 20000 })
      .request("/", { timeout: 20000 })
      .get('[data-cy="logout"]', { timeout: 20000 })
      .click({ force: true }, { timeout: 25000 })
      .location("pathname")
      .should("eq", "/login", { timeout: 15000 });
  });
});
