import express from "express";
//import studentRouter from "./student/routes.js";
//import routes from "./controllers/index.js";
const PORT = 3000;

const app = express();

app.use(express.json());
//app.use(routes);

export default () => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
};
