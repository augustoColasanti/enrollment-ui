import React from "react";
import { Header } from "../components/layout/Header";
import { render, cleanup } from "@testing-library/react";

beforeEach(cleanup);

describe("<Header />", () => {
  describe("Success", () => {
    it("renders the <Header />", () => {
      const { queryByTestId } = render(<Header />);
      expect(queryByTestId("header")).toBeTruthy();
    });
  });
});
