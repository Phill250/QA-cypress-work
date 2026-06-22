Cypress.Commands.add('login', (email, password) => {
    cy.get('.shop-menu a[href="/login"]').click();
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(password);
    cy.get('[data-qa="login-button"]').click();
  });