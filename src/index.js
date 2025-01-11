const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cron = require('node-cron');
const fetchCryptoData = require('../services/fetchCryptoData');
const Routes = require('../routes/Routes');


const DB_URI = process.env.MONGO_URI;
const app = express();
const PORT = process.env.PORT || 3000;

mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

  app.use(express.json());
  app.use(Routes);


cron.schedule('0 */2 * * *', async () => {
  console.log('Fetching cryptocurrency data...');
  await fetchCryptoData();

});




app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
