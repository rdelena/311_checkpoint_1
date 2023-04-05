const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const routes = require("./routes");

// Body-Parser substitute
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log("app is listening on:", port);
});
