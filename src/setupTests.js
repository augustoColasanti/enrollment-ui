import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();
jest.spyOn(window, "alert").mockImplementation(() => {});
