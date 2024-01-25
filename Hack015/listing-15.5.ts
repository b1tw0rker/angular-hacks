describe('Contact Form', () => {
      it('should submit the form', () => {
        cy.visit('http://localhost:4200/contact') // Ändere dies auf die URL Deiner Kontaktseite
        cy.get('#name').type('Test User')
        cy.get('#email').type('test@example.com')
        cy.get('#message').type('Hello World')
        cy.get('#submit').click()
        cy.url().should('include', '/thanks')
      })
})    