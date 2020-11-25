const express = require('express');
const path = require('path');
const app = express();
const PORT = 3040;

app.use(express.static(path.join('/Users/rickh/Documents/hr_sei/fec/catwalk/', 'client/dist')));


app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`Server listening at port ${PORT}`);
});