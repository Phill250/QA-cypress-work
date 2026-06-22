describe("Part 4: Login and Logout", () => {
  const email = `login student${Date.now()}@test.com`;
  const password = "SecurePassword123";
  const name = "Login Student";

  before(() => {
    // Generate valid credentials on the live DB to test the login path
    cy.visit("/");
    cy.get('.shop-menu a[href="/login"]').click();
    cy.get('[data-qa="signup-name"]').type(name);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();
    cy.get('[data-qa="password"]').type(password);
    cy.get('[data-qa="first_name"]').type("First");
    cy.get('[data-qa="last_name"]').type("Last");
    cy.get('[data-qa="address"]').type("125 Main Street");
    cy.get('[data-qa="country"]').select("United States");
    cy.get('[data-qa="state"]').type("California");
    cy.get('[data-qa="city"]').type("San Francisco");
    cy.get('[data-qa="zipcode"]').type("90000");
    cy.get('[data-qa="mobile_number"]').type("+1234567890");
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click();
    cy.get('.shop-menu a[href="/logout"]').click();
  });

  beforeEach(() => {
    cy.visit("/");
  });

  it("Test Case 3: Login With Valid Credentials", () => {
    // Use the custom command from Part 9
    cy.login(email, password);

    // Verify that Logged in as is visible
    cy.get(".shop-menu").should("contain.text", `Logged in as ${name}`);

    // Click Logout
    cy.get('.shop-menu a[href="/logout"]').click();

    // Verify that the user is redirected to the login page
    cy.url().should("include", "/login");
  });
  it("Test Case 4: Login With Invalid Credentials", () => {
    // Use the custom command with wrong credentials
    cy.login("nonexistent_student@test.com", "WrongPassword123");

    // Verify that an error message is displayed
    cy.get('.login-form form p').should("be.visible")
      .and("contain.text", "Your email or password is incorrect!");
  });

  
});