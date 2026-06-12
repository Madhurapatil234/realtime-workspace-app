import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page Working");
});

app.get("/test", (req, res) => {
  res.send("Test Route Working");
});

app.post("/register-test", (req, res) => {
  res.json({
    message: "POST Route Working"
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});