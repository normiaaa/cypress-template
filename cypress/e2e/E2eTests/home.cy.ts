describe("Home Page", () => {
  it("should display the home page", () => {
    cy.visit("/");

    cy.get("[data-cy=home-page]").should("be.visible");
  });
});
