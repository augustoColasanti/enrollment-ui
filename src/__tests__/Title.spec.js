import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { Title } from "../components/Title";
import "@testing-library/jest-dom/extend-expect";

beforeEach(cleanup);

describe("<Title />", () => {
  describe("Success", () => {
    it("renders the <Title />", () => {
      const { queryByTestId } = render(<Title text="text" />);
      expect(queryByTestId("title")).toBeTruthy();
      expect(screen.getByText("text")).toBeInTheDocument();
    });
  });
});
