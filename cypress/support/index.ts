import "./commands";

export interface User {
  email: string;
  password: string;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      loginViaApi(): Chainable<any>;
      loginViaUi(user: User): Chainable<Element>;
      getByTestID(value: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}
