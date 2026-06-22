describe("Part 10: Challenge Tasks", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("Challenge 1: Add Multiple Products to Cart", () => {
      // Open the products page
      cy.get('.shop-menu a[href="/products"]').click();
  
      // Add first product to cart and click Continue Shopping
      cy.get(".productinfo .add-to-cart").eq(0).click();
      cy.get(".modal-footer .btn-success").click();
  
      // Add second product to cart
      cy.get(".productinfo .add-to-cart").eq(1).click();
      
      // Open the cart
      cy.get(".modal-body a[href=\"/view_cart\"]").click();
  
      // Verify both products are visible in the cart rows
      cy.get("#cart_info_table tbody tr").should("have.length", 2);
    });
  
    it("Challenge 3: Subscribe to Newsletter in Footer", () => {
      // Scroll down directly to the footer view anchor
      cy.get("#footer").scrollIntoView();
  
      // Enter an email in the subscription field
      cy.get("#susbscribe_email").type("newsletter_subscriber@test.com");
  
      // Click the subscribe button
      cy.get("#subscribe").click();
  
      // Verify the success banner message
      cy.get(".alert-success").should("be.visible")
        .and("contain.text", "You have been successfully subscribed!");
    });
  });
  