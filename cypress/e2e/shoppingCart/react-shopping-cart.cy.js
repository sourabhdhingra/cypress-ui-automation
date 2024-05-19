describe('Shopping Cart', () => {

  beforeEach(() => {
    // visit the react shopping cart page
    cy.visit('https://react-shopping-cart-67954.firebaseapp.com/')
  });


  it('should be able to buy Black Batman T-shirt', () => {
    // cart should be closed by default
    cy.get('div.sc-1h98xa9-1 > button > span').should('not.exist')

    // select size 'S' first
    cy.get('span.checkmark').filter((index, element) => {
      return element.textContent.trim() === 'S';
    }).click({ multiple: true })

    // Black Batman T-shirt should be visible
    cy.get('div[alt="Black Batman T-shirt"]').should('be.visible')
    
    // Add Black Batman T-shirt to cart
    cy.get('div[alt="Black Batman T-shirt"] ~ button').click()

    // Cart opens up - Cross(X) button appears
    cy.get('div > button.sc-1h98xa9-0 > span').should('have.text', 'X').should('be.visible') // cross buitton visible
    cy.get('span').contains('Cart').should('be.visible')
    cy.get('div.sc-1h98xa9-3').should('have.text', '1') // As 1 item added to the cart
    cy.get('p').contains('SUBTOTAL').next('div').children().eq(0).should('have.text', '$ 10.90')
    cy.get('p').contains('SUBTOTAL').next('div').children().eq(1).children('span').eq(0).should('have.text', 'OR UP TO 9 x $ 1.21')

    // peform checkout
    cy.get('button.sc-1h98xa9-11').should('have.text', 'Checkout').click()
    cy.on('window:alert', (txt) => {
      expect(txt).to.equal('Checkout - Subtotal: $ 10.90');
    });

  })
})