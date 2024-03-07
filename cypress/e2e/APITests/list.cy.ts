describe("User List", () => {
  it("should display the user list", () => {
    cy.fixture("list.json").then((dataToCompare) => {
      cy.request({
        method: "GET",
        url: `${Cypress.env("baseUrl")}/users`,
      }).then((data) => {
        expect(dataToCompare).to.deep.equal(data.body);
      });
    });
  });
});
