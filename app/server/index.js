import express from "express";
import homepageRouter from "./homepageRouter.js";
import assetsRouter from "./assetsRouter.js";
import path from "path";

const port = process.env.PORT || 3000;
const publicPath = path.join(path.resolve(), "public");
const distPath = path.join(path.resolve(), "dist");


const app = express();

app.get("/api/v1/hello", (_req, res) => {
  res.json({ message: "Hello, world depuis le back-end!" });
});

if (process.env.NODE_ENV === "production") {
    app.use("/", express.static(distPath));
} else {
    app.use("/", express.static(publicPath));
    app.use("/src", assetsRouter);
}

app.use(homepageRouter);

app.listen(port, () => {
  console.log("Server listening on port", port, `http://localhost:${port}`);
});