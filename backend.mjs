import cors from "cors";
import express from "express";
const app = express();

app.use(
  cors({
    domains: [
      "https://aryaidnani-sandbox-git-main-aryaidnanis-projects.vercel.app/",
      "https://aryaidnani-sandbox-git-main-aryaidnanis-projects.vercel.app/index.html",
      "https://aryaidnani-sandbox-git-main-aryaidnanis-projects.vercel.app/progress.html",
    ],
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

let viewCounter = 0;

app.get("/backend", (req, res) => {
  viewCounter++;
  console.log(viewCounter);
  res.json({
    message: viewCounter,
  });
});

app.listen();
