const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { PORT, db } = require("./conf");

app.listen(PORT, () => {
    console.log(`API root available at http://localhost:${PORT}/`);
  });

  