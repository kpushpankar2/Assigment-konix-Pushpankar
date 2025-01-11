const express = require('express');
const Crypto = require('../models/Crypto');

const router = express.Router();

router.get('/',async(req,res) =>{
   return "Welcome to Pushpankar Assignemt"
})

router.get('/stats', async (req, res) => {
  try {
    const { coin } = req.query;

    if (!coin) {
      return res.status(400).json({ error: 'Coin query parameter is required.' });
    }

    const cryptoData = await Crypto.findOne({ name: coin }).sort({ timestamp: -1 });

    if (!cryptoData) {
      return res.status(404).json({ error: `No data found for the coin: ${coin}` });
    }

    res.status(200).json({
      price: cryptoData.price,
      marketCap: cryptoData.marketCap,
      '24hChange': cryptoData.change24h,
    });
  } catch (err) {
    console.error('Error fetching cryptocurrency stats:', err);
    res.status(500).json({ error: 'An error occurred while fetching the data.' });
  }
});

router.get('/deviation', async (req, res) => {
  debugger;
  try {
    const { coin } = req.query;

    if (!coin) {
      return res.status(400).json({ error: 'Coin query parameter is required.' });
    }

    const cryptoRecords = await Crypto.find({ name: coin })
      .sort({ timestamp: -1 })
      .limit(100);

    if (cryptoRecords.length === 0) {
      return res.status(404).json({ error: `No data found for the coin: ${coin}` });
    }

    const prices = cryptoRecords.map((record) => record.price);

    const mean = prices.reduce((sum, price) => sum + price, 0) / prices.length;
    const variance =
      prices.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) /
      prices.length;
    const standardDeviation = Math.sqrt(variance);


    res.status(200).json({ deviation: parseFloat(standardDeviation.toFixed(2)) });
  } catch (err) {
    console.error('Error calculating standard deviation:', err);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});

module.exports = router;
