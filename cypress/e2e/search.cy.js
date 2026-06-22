describe("Part 5: Product Search", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("Test Case 5: Search for a Product", () => {
      // Click Products link
      cy.get('.shop-menu a[href="/products"]').click();
  
      // Verify that the products page loads
      cy.url().should("include", "/products");
      cy.get(".title.text-center").should("contain.text", "All Products");
  
      // Search for dress
      cy.get("#search_product").type("dress");
  
      // Click the search button
      cy.get("#submit_search").click();
  
      // Verify that searched products are displayed
      cy.get(".title.text-center").should("contain.text", "Searched Products");
  
      // Verify that the results relate to dress
      // Verify that the searched products cards container is visible
cy.get(".features_items").should("be.visible");
cy.get(".productinfo").should("have.length.at.least", 1);

      });
    });
  