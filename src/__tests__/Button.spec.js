import React from "react";
import { Button } from "../components/Button";
import { render, cleanup, fireEvent } from "@testing-library/react";

beforeEach(cleanup);

describe("<Button />", () => {
  describe("Success", () => {
    it("renders the <Button />", () => {
      const onClick = jest.fn();
      const { queryByTestId } = render(
        <Button onClick={onClick} disabled={false} testId="button" />
      );
      expect(queryByTestId("button")).toBeTruthy();
    });

    it("renders the <Button /> and attempts a click", () => {
      const onClick = jest.fn();
      const { queryByTestId } = render(
        <Button onClick={onClick} disabled={false} testId="button" />
      );
      expect(queryByTestId("button")).toBeTruthy();
      fireEvent.click(queryByTestId("button"));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("renders the <Button /> disabled and attempts a click", () => {
      const onClick = jest.fn();
      const { queryByTestId } = render(
        <Button onClick={onClick} disabled={true} testId="button" />
      );
      expect(queryByTestId("button")).toBeTruthy();
      fireEvent.click(queryByTestId("button"));
      expect(onClick).toHaveBeenCalledTimes(0);
    });
  });
});
