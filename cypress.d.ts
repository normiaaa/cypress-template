import "./commands";

declare global {
  namespace Cypress {
    interface Chainable {
      getByTestID(value: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}
