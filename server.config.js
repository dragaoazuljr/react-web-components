const express = require('express');

const port = process.env.PORT || 3001;

let app = express();
app.use(express.static('./src/public'))

app.listen(port, () => {
  console.info("up and running on port", port);
});