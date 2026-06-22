describe("Part 7: Cart Functionality", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("Test Case 7: Add Product to Cart", () => {
      // Click Products
      cy.get('.shop-menu a[href="/products"]').click();
  
      // Add the first product to cart (using first visible overlay button)
      cy.get(".productinfo .add-to-cart").first().click();
  
      // Click View Cart from the success modal overlay
      cy.get(".modal-body a[href=\"/view_cart\"]").click();
  
      // Verify the cart page opens
      cy.url().should("include", "/view_cart");
  
      // Verify the selected product is visible in the cart
      cy.get("#cart_info_table tbody tr").should("have.length.of.at.least", 1);
  
      // Verify quantity and price are displayed
      cy.get(".cart_price").should("be.visible");
      cy.get(".cart_quantity").should("be.visible");
    });
  
    it("Test Case 8: Remove Product From Cart", () => {
      // Prerequisite: Add an item to the cart first
      cy.get('.shop-menu a[href="/products"]').click();
      cy.get(".productinfo .add-to-cart").first().click();
      cy.get(".modal-body a[href=\"/view_cart\"]").click();
  
      // Open the cart and click the remove button
      cy.get(".cart_quantity_delete").first().click();
  
      // Verify the cart becomes empty (handling state update changes gracefully)
      cy.get("#empty_cart").should("be.visible").and("contain.text", "Cart is empty!");
    });
  });
  