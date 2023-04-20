/// <reference types="Cypress" />

describe("My first test", function () {
  it("Does not do much!", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    cy.get('.product:visible').should('have.length', 4)
    cy.get('.products').find('.product').should('have.length', 4)
    // cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
    cy.get('.products').find('.product').each((el, i, list) => {
        const name = el.find('h4.product-name').text();
        if(name.includes('Cashews') || name.includes('Carrot')) {
            cy.wrap(el).find('button').click();
            cy.wait(500);
        }
    })
    cy.get('.cart-icon').click();
    // cy.get('ul.cart-items').find('.cart-item').should('have.length',2);
    cy.get('ul.cart-items > li.cart-item:visible').should('have.length',2);
    cy.get('.cart-preview > div.action-block > button').click();
    cy.get('button').contains('Place Order').click();
  });
});
