/// <reference types="Cypress" />

describe("Html tags being validated", function () {
  // it("Select and unselect checkboxes", function () {
  //   cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  //   cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
  //   cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
  //   cy.get('#checkbox-example').find("input[type='checkbox']").as('checkboxes').should('have.length',3);
  //   cy.get('@checkboxes').check(['option3','option2'])
  // });

  // it("Select a option on a dropdown ", function () {
  //   cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  //   cy.get('#dropdown-class-example').select('option2').should('have.value','option2');

  // });

  // it("Select a option on a dynamic dropdown ", function () {
  //   cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  //   cy.get('#autocomplete').type('Braz')
  //   .wait(500)
  //   .get('.ui-menu-item div').each(($el) => {
  //       if($el.text() === 'Brazil') {
  //         cy.wrap($el).click();
  //       }
  //   })
  //   cy.get('#autocomplete').should('have.value','Brazil')

  // });

  // it("get hidable checkbox and validate ", function () {
  //   cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  //   cy.get('#displayed-text').as('displayedText').should('be.visible');
  //   cy.get('#hide-textbox').click();
  //   cy.get('@displayedText').should('not.be.visible');
  //   cy.get('#show-textbox').click();
  //   cy.get('@displayedText').should('be.visible');
  // });

  // it("check radio button ", function () {
  //   cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  //   cy.get('#radio-btn-example').find("input[type=Radio]").each(($el)=>{
  //     if($el.val().includes('radio1')){
  //       cy.wrap($el).check();
  //     }
  //   })
  // });

  // it("Handling alert window pop up ", function () {
  //   cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  //   cy.get('#alertbtn').click();
  //   cy.on('window:alert', (str) => {
  //     expect(str).to.equal('Hello , share this practice page and share your knowledge')
  //   })
  // });

  // it("Handling confirm window pop up ", function () {
  //   cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  //   cy.get('#confirmbtn').click();
  //   cy.on('window:confirm', (str) => {
  //     expect(str).to.equal('Hello , Are you sure you want to confirm?')
  //   })
  // });

  // it("Handling a child tab ", function () {
  //   cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  //   cy.get('#opentab').invoke('removeAttr', 'target').click();
  //   cy.url().should('include','qaclickacademy');
  // });

  // it("Handling table data", function () {
  //   cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  //   cy.get('tr td:nth-child(2)').each(($el, i, $list) => {
  //     const text = $el.text();
  //     if(text.includes("Python")){
  //       cy.get('tr td:nth-child(2)').eq(i).next().then((price) => {
  //         const priceText = price.text();
  //         expect(priceText).to.equal('25')
  //       })
  //     }
  //   })
  // });

  // it("Handling Mouse over", function () {
  //   cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  //   cy.get('div.mouse-hover-content').invoke('show')
  //   cy.get('div.mouse-hover-content').contains('Top').click();
  //   cy.url().should('include','top')
  // });

  it("Handling Mouse over without showing the element", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('div.mouse-hover-content').contains('Top').click({force: true});
    cy.url().should('include','top')
  });
});
