/// <reference types="Cypress" />

describe("My first test", function () {

    before(function () {
        // runs once before all tests in the block
        cy.fixture('example').then(function (data) {
          this.data = data
        })
      })

    it("Does not do much!", function () {
      cy.visit('https://rahulshettyacademy.com/angularpractice/');
      cy.get('input[name="name"]:nth-child(2)').type(this.data.name);
      cy.get('#exampleFormControlSelect1').select(this.data.gender);
    });
  });
  