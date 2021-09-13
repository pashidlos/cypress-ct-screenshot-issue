import App from "./App";
import * as cssFiles from "./index.css";
import { mount } from "@cypress/react";

describe("renders learn react link", () => {
  it("Test", () => {
    mount(<App />, {
      cssFiles,
    });

    cy.screenshot();
  });
});
