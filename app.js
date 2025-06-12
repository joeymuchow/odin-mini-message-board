import express from 'express';
import path from 'node:path';
import indexRouter from './routes/indexRouter.js';
import newMessageRouter from './routes/newMessageRouter.js';

const app = express();
const __dirname = import.meta.dirname;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", newMessageRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running - listening on port ${PORT}!`);
});