const request = require("supertest");
const app = require("../app");

describe("Healthcheck endpoint", () => {
    it("should return 200 OK", async () => {
        const response =  await request(app).get("/healthcheck");
    
        expect(response.statusCode).toBe(200);
        
    });
});