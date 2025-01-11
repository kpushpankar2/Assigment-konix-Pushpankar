
Assignment of Pushpankar
Welcome to the Assignment of Pushpankar. This project provides endpoints for cryptocurrency statistics, deviation calculations, and a welcome message.

Base URL
https://assigment-konix-pushpankar.onrender.com/

Endpoints
1. Welcome Endpoint
URL: /
Method: GET
Description: Returns a welcome message.
Example Usage: Welcome Message
Response:
json
Copy code
{
  "message": "Welcome to the Assignment of Pushpankar!"
}
2. Statistics Endpoint
URL: /stats?coin=<coin_name>
Method: GET
Description: Provides statistics about the specified cryptocurrency.
Supported Coins: ethereum, bitcoin, matic
Example Usage:
Ethereum: https://assigment-konix-pushpankar.onrender.com/stats?coin=ethereum
Bitcoin: https://assigment-konix-pushpankar.onrender.com/stats?coin=bitcoin
Matic: https://assigment-konix-pushpankar.onrender.com/stats?coin=matic
Response Example:
{
    "price": 94346,
    "marketCap": 1869211667794.397,
    "24hChange": 0.40581075419109053
}
}
3. Deviation Endpoint
URL: /deviation?coin=<coin_name>
Method: GET
Description: Returns the deviation information for the specified cryptocurrency.
Supported Coins: ethereum, bitcoin, matic
Example Usage:
Ethereum: https://assigment-konix-pushpankar.onrender.com/deviation?coin=ethereum
Bitcoin: https://assigment-konix-pushpankar.onrender.com/deviation?coin=bitcoin
Matic: https://assigment-konix-pushpankar.onrender.com/deviation?coin=matic
Response Example:
json
{
  "deviation": "0"
}
Usage Instructions
Use the base URL https://assigment-konix-pushpankar.onrender.com/ to interact with the endpoints.
Append the required endpoint path (/stats, /deviation, or /) along with query parameters (if needed).
Supported cryptocurrencies: ethereum, bitcoin, matic.
Example Usage with Links
Welcome Message: https://assigment-konix-pushpankar.onrender.com/
Ethereum Statistics: https://assigment-konix-pushpankar.onrender.com/stats?coin=ethereum
Bitcoin Statistics: https://assigment-konix-pushpankar.onrender.com/stats?coin=bitcoin
Matic Statistics: https://assigment-konix-pushpankar.onrender.com/stats?coin=matic
Ethereum Deviation: https://assigment-konix-pushpankar.onrender.com/deviation?coin=ethereum
Bitcoin Deviation: https://assigment-konix-pushpankar.onrender.com/deviation?coin=bitcoin
Matic Deviation: https://assigment-konix-pushpankar.onrender.com/deviation?coin=matic
Supported Cryptocurrencies
Ethereum
Bitcoin
Matic
Contact
For any queries or feedback, please reach out to Pushpankar at kpushpankar2@gmail.com.
