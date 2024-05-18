describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://react-shopping-cart-67954.firebaseapp.com/')
    cy.get('.checkmark:contains("S")').click({ multiple: true })
  })
})