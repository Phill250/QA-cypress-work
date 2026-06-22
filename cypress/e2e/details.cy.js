describe("Part 6: Product Details", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("Test Case 6: View Product Details", () => {
      // Click Products
      cy.get('.shop-menu a[href="/products"]').click();
  
      // Click View Product on the first product
      cy.get(".choose a").first().click();
  
      // Verify product details are visible
      cy.url().should("include", "/product_details/");
      
      // Check for specific product details containers
      cy.get(".product-information h2").should("be.visible"); // Product name
      cy.get(".product-information p").contains("Category:").should("be.visible"); // Category
      cy.get(".product-information span span").should("be.visible"); // Price
      cy.get(".product-information p").contains("Availability:").should("be.visible"); // Availability
      cy.get(".product-information p").contains("Condition:").should("be.visible"); // Condition
      cy.get(".product-information p").contains("Brand:").should("be.visible"); // Brand
    });
  });
  