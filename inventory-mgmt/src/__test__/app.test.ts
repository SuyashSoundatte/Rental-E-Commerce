import request from "supertest";
import app from "..";


describe("GET /health",()=>{
    it("It should return status 200",async ()=>{
        const res=await request(app)
            .get("/health")
        
        expect(res.statusCode).toBe(200)
    })
    it("should be true",()=>{
        expect(true).toBe(true);
    });
})