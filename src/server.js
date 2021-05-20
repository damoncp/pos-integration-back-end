const express = require('express');
const cors = require('cors');
const posRouter = require('./routes/routes');

const app = express();
const port = process.env.PORT || '6666';

// middleware
// json format setup
app.use(express.json());
// router
app.use(posRouter);
// cors enabled
app.use(cors());


app.listen(port, () => {
  console.log(`POS server is running on port ${port}`);
});
