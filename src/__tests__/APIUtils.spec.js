import { APIUtils } from "../common/APIUtils";
import { waitFor } from "@testing-library/react";

const students = [
  {
    id: 0,
    name: "Tsunioshi Tanaka",
    startDate: "1963-05-13",
  },
];

beforeEach(() => {
  fetch.resetMocks();
});

describe("get", () => {
  describe("Success", () => {
    it("should execute handleSuccess and handleFinally", async () => {
      fetch.mockResponseOnce(JSON.stringify(students));
      const handleSuccess = jest.fn();
      const handleFinally = jest.fn();
      APIUtils.get(
        "students?sort=ASC",
        handleSuccess,
        jest.fn(),
        handleFinally
      );
      await waitFor(() => expect(handleSuccess).toHaveBeenCalledTimes(1));
      await waitFor(() => expect(handleFinally).toHaveBeenCalledTimes(1));
    });
  });
});

describe("post", () => {
  describe("Success", () => {
    it("should execute handle success", async () => {
      fetch.mockResponseOnce();
      const body = {
        id: 1,
        name: "Augusto Sanches",
        startDate: "2005-06-01",
      };
      const handleSuccess = jest.fn();
      APIUtils.post("students", body, handleSuccess, jest.fn(), jest.fn());
      await waitFor(() => expect(handleSuccess).toHaveBeenCalledTimes(1));
    });
  });
});
