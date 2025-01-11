const fetch = require('node-fetch');
const Crypto = require('../models/Crypto');

const API_URL =
  'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,matic-network,ethereum&vs_currencies=usd&include_market_cap=true&include_24hr_change=true';

const fetchCryptoData = async () => {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': process.env.COIN_GECKO_API_KEY,
      },
    });
    const data = await response.json();

    const cryptos = [
      { name: 'bitcoin', symbol: 'BTC', data: data.bitcoin },
      { name: 'matic', symbol: 'MATIC', data: data['matic-network'] },
      { name: 'ethereum', symbol: 'ETH', data: data.ethereum },
    ];

    for (const crypto of cryptos) {
      const { name, symbol, data } = crypto;

      await Crypto.create({
        name,
        symbol,
        price: data.usd,
        marketCap: data.usd_market_cap,
        change24h: data.usd_24h_change,
      });
    }

    // const allCryptoData = await Crypto.find();
    // console.log(allCryptoData);

    console.log('Cryptocurrency data saved successfully.');
  } catch (err) {
    console.error('Error fetching cryptocurrency data:', err);
  }
};

module.exports = fetchCryptoData;
