describe("Homepage test", () => {
  it("passes", () => {
    cy.visit("https://automationexercise.com");
    cy.url().should("include", "automationexercise.com");
    cy.title().should("include", "Automation Exercise");

    cy.get(".logo img")
      .should("be.visible")
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });

    cy.get(".shop-menu").should("be.visible");

    cy.get('.shop-menu a[href="/login"]')
      .should("be.visible")
      .and("contain.text", "Signup / Login");
  });
});
