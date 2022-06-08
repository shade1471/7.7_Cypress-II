const user = require("../fixtures/user.json");
const admPage = require("../fixtures/adminPage.json");

beforeEach(() => {
  cy.visit("/admin");
  cy.get(admPage.header).should("be.visible");
});

describe("Login to admin part of service", () => {
  it("Should login how valid user", () => {
    cy.get(admPage.email).type(user.login);
    cy.get(admPage.password).type(user.password);
    cy.contains(admPage.logIn).click();
    cy.contains(admPage.hallControl).should("be.visible");
  });

  it("Should login how no valid user", () => {
    cy.get(admPage.email).type(user.badLogin);
    cy.get(admPage.password).type(user.badPassword);
    cy.contains(admPage.logIn).click();
    cy.contains("Ошибка авторизации!").should("be.visible");
  });
});
