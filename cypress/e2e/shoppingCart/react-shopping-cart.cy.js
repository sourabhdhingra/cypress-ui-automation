describe('Shopping Cart', () => {

  beforeEach(() => {
    // visit the react shopping cart page
    cy.visit('https://react-shopping-cart-67954.firebaseapp.com/')
  });
  
  
  it('should be able to buy Black Batman T-shirt', () => {
    cy.get('.checkmark:contains("S")').click({ multiple: true })
    // cy.get('img[alt="Black Batman T-shirt').trigger('mouseover')

    cy.get('.sc-bj2vay-1:nth-child(3) .checkmark').click();
    // cy.get('[data-testid=checkbox]').click();
    // cy.get('.kaJsVi > .sc-124al1g-0').click();
    // cy.get('.sc-1h98xa9-11').click();

  })
})