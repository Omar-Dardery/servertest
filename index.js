import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render('index.ejs');
});

app.post("/submit", (req, res) => {
  var firstname = req.body["firstname"];
  var lastname = req.body["lastname"];
  var nameLength = firstname.length + lastname.length;
  res.render('index.ejs', { name: nameLength });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
