import { HOMEPAGE } from "../support/testIDs/homepage";
describe("Verifies elements from HomePage", () => {
  it("Checks homepage", () => {
    cy.fixture("homepage").then((homepage) => {
      cy.visit("");
      cy.url().should("include", homepage.url);
      cy.get(HOMEPAGE.TITLE_TEXT)
        .should("be.visible")
        .and("have.text", homepage.title);
      cy.get(HOMEPAGE.DESCRIPTION_TEXT)
        .should("be.visible")
        .and("have.text", homepage.description);
      cy.get(HOMEPAGE.SUBTITLE_TEXT)
        .should("be.visible")
        .and("have.text", homepage.subtitle);
      cy.get(HOMEPAGE.SUBTITLE_DESCRIPTION_TEXT)
        .should("be.visible")
        .and("have.text", homepage.subtitleDescription);
    });
  });
});
