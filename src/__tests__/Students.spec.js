import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { Students } from "../components/Students";
import "@testing-library/jest-dom/extend-expect";

const students = [
  {
    id: 0,
    name: "Tsunioshi Tanaka",
    startDate: "1963-05-13",
  },
];

beforeEach(() => {
  fetch.resetMocks();
  cleanup;
});

describe("<Students />", () => {
  describe("Success", () => {
    it("renders the <Students /> and expects students-table", async () => {
      fetch.mockResponseOnce(JSON.stringify(students));
      const { queryByTestId } = render(<Students />);
      expect(queryByTestId("students")).toBeInTheDocument();
      expect(queryByTestId("title")).toBeInTheDocument();
      expect(queryByTestId("loading-students")).toBeInTheDocument();
      expect(await screen.findByTestId("students-table")).toBeInTheDocument();
    });

    it("renders the <Students /> and expects tech-issues-message", async () => {
      fetch.mockResponseOnce(null);
      const { queryByTestId } = render(<Students />);
      expect(queryByTestId("students")).toBeInTheDocument();
      expect(queryByTestId("title")).toBeInTheDocument();
      expect(queryByTestId("loading-students")).toBeInTheDocument();
      expect(
        await screen.findByTestId("tech-issues-message")
      ).toBeInTheDocument();
    });
  });
});
