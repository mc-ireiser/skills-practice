const request = require("supertest");
const app = require("../../app");

describe("Users route", () => {
  it("Should render with the text `respond with a resource`", async () => {
    const res = await request(app).get("/users");

    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("respond with a resource");
  });
});
