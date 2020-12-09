const request = require("supertest");
const app = require("../../app");

describe("Users route", () => {
  describe('When there is no database records', () => {
    it("renders an empty list", async () => {
      const res = await request(app).get("/users")

      expect(res.statusCode).toBe(200)
      expect(res.type).toBe('application/json')
      expect(res.body).toStrictEqual([])
    });
  });
});
