import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Input } from "../components/Input";

beforeEach(cleanup);

describe("<Input />", () => {
  describe("Success", () => {
    it("renders the <Input />", () => {
      const { queryByTestId } = render(<Input testId="input" />);
      expect(queryByTestId("input")).toBeTruthy();
    });

    it("renders the <Input /> touched and invalid", () => {
      const { queryByTestId } = render(
        <Input testId="input" touched valid={false} />
      );
      expect(queryByTestId("input")).toBeTruthy();
      expect(queryByTestId("input").classList.contains("invalid-input")).toBe(
        true
      );
    });
  });
});
