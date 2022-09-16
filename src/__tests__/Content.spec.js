import React from "react";
import { Content } from "../components/layout/Content";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

beforeEach(cleanup);

describe("<Content />", () => {
  describe("Success", () => {
    it("renders the <Content /> and expects <Student /> and <Button />", async () => {
      const { queryByTestId } = render(<Content />);
      expect(queryByTestId("content")).toBeInTheDocument();
      expect(queryByTestId("nav-button")).toBeInTheDocument();
      expect(await screen.findByTestId("students")).toBeInTheDocument();
    });

    it("renders the <Content />, clicks nav-button and expects <AddStudent />", async () => {
      const { queryByTestId } = render(<Content />);
      fireEvent.click(queryByTestId("nav-button"));
      expect(queryByTestId("students")).not.toBeInTheDocument();
      expect(await screen.findByTestId("add-student")).toBeInTheDocument();
    });

    it("renders the <Content />, clicks nav-button twice and expects <Students />", async () => {
      const { queryByTestId } = render(<Content />);
      fireEvent.doubleClick(queryByTestId("nav-button"));
      expect(queryByTestId("add-student")).not.toBeInTheDocument();
      expect(await screen.findByTestId("students")).toBeInTheDocument();
    });
  });
});
