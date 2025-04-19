import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/health',(_,res)=>{
  res.status(200).json("analytics: Health Check Pass 🧑‍⚕️✅");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export default app;