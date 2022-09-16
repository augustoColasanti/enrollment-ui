import React from "react";
import { App } from "../App";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

beforeEach(cleanup);

describe("<App />", () => {
  it("renders the <App />", async () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId("application")).toBeInTheDocument();
    expect(await screen.findByTestId("students")).toBeInTheDocument();
  });
});
