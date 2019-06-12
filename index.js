var express = require("express");
var path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "app")));

app.get("*", (req, res) => {
  //   console.log(path.resolve(__dirname + "/app", "", "index.html"));
  res.sendFile(path.resolve(__dirname + "/app", "", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
