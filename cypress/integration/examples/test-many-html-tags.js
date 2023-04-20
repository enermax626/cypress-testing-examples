/// <reference types="Cypress" />

describe("My first test", function () {
  it("Does not do much!", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
  });
});
