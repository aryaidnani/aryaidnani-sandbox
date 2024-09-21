import cors from "cors";
import express from "express";
const app = express();

app.use(
  cors({
    domains: [
      "https://aryaidnani-sandbox-git-main-aryaidnanis-projects.vercel.app",
    ],
  })
);

let viewCounter = 0;

app.get("/backend", (req, res) => {
  viewCounter++;
  console.log(viewCounter);
  res.json({
    message: viewCounter,
  });
});

app.listen();
