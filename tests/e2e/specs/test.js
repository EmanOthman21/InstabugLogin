// https://docs.cypress.io/api/introduction/api.html

describe("Test Login Form", () => {
  it("Scenario1: Email not exist", () => {
    cy.visit("http://localhost:8080/login");
    cy.get("#email").type("eothman21@gmail.com");
    cy.get("#password").type("1P12345678");
    cy.get("#submit").click();
    cy.get("#incorrect_data");
  });

  it("Scenario2: Correct Email & Wrong Password", () => {
    cy.visit("http://localhost:8080/login");
    cy.get("#email").type("mohamed@instabug.com");
    cy.get("#password").type("1P12345678");
    cy.get("#submit").click();
    cy.get("#incorrect_data");
  });

  it("Scenario3: Correct email & password", () => {
    cy.visit("http://localhost:8080/login");
    cy.get("#email").type("mohamed@instabug.com");
    cy.get("#password").type("P12345678");
    cy.get("#submit").click();
    cy.url().should("eq", "http://localhost:8080/");
  });

  it("Scenario4: Invalid Email Address Format", () => {
    cy.visit("http://localhost:8080/login");
    cy.get("#email")
      .type("dddd")
      .blur()
      .should("have.css", "border-color", "rgb(244, 77, 46)");
    cy.get("#invalid_email");
  });
});
