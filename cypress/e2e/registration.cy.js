describe("Part 3: User Registration", () => {
  it("Test Case 2: Register a New User", () => {
    // Generate a unique email using the provided hint
    const uniqueEmail = `student${Date.now()}@test.com`;
    const password = "SecurePassword123";
    const name = "Test Student";
    // 1. Open the website

    cy.visit("https://automationexercise.com");
    // 2. Click Signup / Login

    cy.get('.shop-menu a[href="/login"]').click();

    // 3. Enter a unique name and email address (Signup section)
    cy.get('[data-qa="signup-name"]').type(name);
    cy.get('[data-qa="signup-email"]').type(uniqueEmail);

    // 4. Click Signup
    cy.get('[data-qa="signup-button"]').click();
    // 5. Fill in account details & Select title
    cy.get("#id_gender1").check(); // Selects 'Mr.' radio button
    cy.get('[data-qa="password"]').type(password);
    // 6. Select date of birth

    cy.get('[data-qa="days"]').select("10");
    cy.get('[data-qa="months"]').select("February");
    cy.get('[data-qa="years"]').select("2005"); // Opt-in checkboxes (Optional, but ensures forms match standard workflows)

    cy.get("#newsletter").check();
    cy.get("#optin").check();
    // 7. Fill in address information

    cy.get('[data-qa="first_name"]').type("First");
    cy.get('[data-qa="last_name"]').type("Last");
    cy.get('[data-qa="company"]').type("Temelio");
    cy.get('[data-qa="address"]').type("125 Main Street");
    cy.get('[data-qa="address2"]').type("Suite 400");
    cy.get('[data-qa="country"]').select("United States");
    cy.get('[data-qa="state"]').type("California");
    cy.get('[data-qa="city"]').type("San Francisco");
    cy.get('[data-qa="zipcode"]').type("90000");
    cy.get('[data-qa="mobile_number"]').type("+1234567890");
    // 8. Click Create Account
    cy.get('[data-qa="create-account"]').click();
    // 9. Verify that Account Created! is displayed
    cy.get('[data-qa="account-created"]').should("be.visible");
    cy.get("b").should("contain.text", "Account Created!");
    // 10. Click Continue
    cy.get('[data-qa="continue-button"]').click();
    // 11. Verify that the user is logged in
    cy.get(".shop-menu").should("contain.text", `Logged in as ${name}`);
    // 12. Delete the account at the end of the test
    cy.get('.shop-menu a[href="/delete_account"]').click();
    // Verify Account Deleted! message to confirm cleanup
    cy.get('[data-qa="account-deleted"]').should("be.visible");
    cy.get("b").should("contain.text", "Account Deleted!");
    cy.get('[data-qa="continue-button"]').click();
  });
});
