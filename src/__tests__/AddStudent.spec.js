import "@testing-library/jest-dom/extend-expect";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { AddStudent } from "../components/AddStudent";

beforeEach(cleanup);

describe("<AddStudent />", () => {
  describe("Success", () => {
    it("renders the <AddStudent /> and expects <Title /> and <Button />", () => {
      const { queryByTestId } = render(<AddStudent />);
      expect(queryByTestId("add-student")).toBeTruthy();
      expect(queryByTestId("title")).toBeTruthy();
      expect(queryByTestId("save-button")).toBeTruthy();
    });

    it("renders the <AddStudent /> and adds student", async () => {
      const { queryByTestId } = render(<AddStudent />);
      expect(queryByTestId("add-student")).toBeInTheDocument();

      fireEvent.change(queryByTestId("name-input"), {
        target: { value: "Augusto" },
      });
      expect(queryByTestId("name-input").value).toBe("Augusto");

      fireEvent.change(queryByTestId("start-date-input"), {
        target: { value: "2021-01-01" },
      });
      expect(queryByTestId("start-date-input").value).toBe("2021-01-01");

      fireEvent.click(queryByTestId("save-button"));
      expect(await screen.findByTestId("add-student")).toBeInTheDocument();
    });

    it("renders the <AddStudent /> and adds student with invalid name", () => {
      const { queryByTestId } = render(<AddStudent />);
      expect(queryByTestId("add-student")).toBeTruthy();

      fireEvent.change(queryByTestId("name-input"), {
        target: { value: "Augusto" },
      });
      fireEvent.change(queryByTestId("name-input"), {
        target: { value: "" },
      });
      expect(queryByTestId("name-input").value).toBe("");
      expect(
        queryByTestId("name-input").classList.contains("invalid-input")
      ).toBe(true);

      fireEvent.change(queryByTestId("start-date-input"), {
        target: { value: "2021-01-01" },
      });
      expect(queryByTestId("start-date-input").value).toBe("2021-01-01");

      fireEvent.click(queryByTestId("save-button"));
    });

    it("renders the <AddStudent /> and adds student with invalid start date", () => {
      const { queryByTestId } = render(<AddStudent />);
      expect(queryByTestId("add-student")).toBeTruthy();

      fireEvent.change(queryByTestId("name-input"), {
        target: { value: "Augusto" },
      });
      expect(queryByTestId("name-input").value).toBe("Augusto");
      expect(
        queryByTestId("name-input").classList.contains("invalid-input")
      ).toBe(false);

      fireEvent.change(queryByTestId("start-date-input"), {
        target: { value: "2021-01-01" },
      });
      fireEvent.change(queryByTestId("start-date-input"), {
        target: { value: "2021-01" },
      });
      expect(queryByTestId("start-date-input").value).toBe("");
      expect(
        queryByTestId("start-date-input").classList.contains("invalid-input")
      ).toBe(true);

      fireEvent.click(queryByTestId("save-button"));
    });
  });
});
