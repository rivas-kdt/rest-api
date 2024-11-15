const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log('Server is Running');
});


const { qrdata } = require('../handler/qrdata');

app.get('/', qrdata);