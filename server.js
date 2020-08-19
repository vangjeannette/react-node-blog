const express = require('express');
const app = express();
const PORT = process.env.PORT || 1234;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
