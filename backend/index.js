import express from "express";
import mongoose from "mongoose";
import routes from "./routes/soccerRoutes";
import cors from "cors";

const app = express();
const PORT = 4000;

mongoose.connect("mongodb://localhost/soccerdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to the database");
});

//request object body parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

routes(app);

app.get("/", (req, res) => {
  console.log("Holla received a GET at the root.");
  res.send(`You hit me at port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Application running at port ${PORT}`);
});
