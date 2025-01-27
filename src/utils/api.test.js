// src/utils/api.test.js
const { fetchData } = require("./api");
const axios = require("axios");

jest.mock("axios"); // Mockear axios

describe("fetchData tests", () => {
  it("fetches data successfully from API", async () => {
    const mockData = { data: { title: "Test Post" } };
    axios.get.mockResolvedValue(mockData);

    const result = await fetchData();
    expect(result.title).toBe("Test Post");
  });
});
