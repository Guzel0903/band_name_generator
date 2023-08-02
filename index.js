import express from "express";
import bodyParser from "body-parser";
import { generate, count } from "random-words";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
  
});

app.post("/submit", (req, res) => {
  const bandName = 
    generate({
      exactly: 1,
      wordsPerString: 2,
      formatter: (word, index) => {
        return index === 0
          ? word.slice(0, 1).toUpperCase().concat(word.slice(1))
          : word;
      },
    })
  res.render("index.ejs", {myBand: bandName});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
