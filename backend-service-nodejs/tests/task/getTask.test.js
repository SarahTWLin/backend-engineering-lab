const request = require("supertest");
const app = require("../../app");
const dotenv = require("dotenv");
const path = require('path');

dotenv.config();

describe("GET Task endpoint", () => {
    it("should return list of tasks", async() => {
        
        const response = await request(app).get(`/tasks/${process.env.VERSION}`);

        expect(Array.isArray(response.body.tasks)).toBe(true);

        if (response.body.tasks.length > 0) {
            expect(response.body.tasks[0]).toHaveProperty("id");
            expect(response.body.tasks[0]).toHaveProperty("title");
            expect(response.body.tasks[0]).toHaveProperty("description");
            expect(response.body.tasks[0]).toHaveProperty("completed");
        }
        
    });
});