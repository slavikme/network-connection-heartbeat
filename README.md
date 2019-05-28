# Network Connection Heartbeat

This service provides a way to monitor network connection (ping) for a specific server or a group of servers.
But mainly, it has been designed to monitor the internet connection within a home or office.

This service is very simple and very light. In order to keep it this way, it will only provide a notification once when the network is unavailable and another time when it is back online again.

## Requirements
1. [Node.js](https://nodejs.org/en/) v10.15.3+.
3. [`ping`](https://en.wikipedia.org/wiki/Ping_%28networking_utility%29) utility installed on the OS.

## Installation
1. Clone this git repo into a desired directory and `cd` into it.
   ```$xslt
   git clone git@github.com:slavikme/network-connection-heartbeat.git nch
   cd nch
   ```
2. Install the dependencies, by running the following command:
   ```$xslt
   npm install
   ```
3. Clone the `.env.dist` file into `.env` and modify it accordingly.  
   * `TELEGRAM_BOT_TOKET` - Telegram bot key. You can generate a new one using 
     [BotFather](https://telegram.me/BotFather). You can read more about Telegram 
     bots [here](https://core.telegram.org/bots).
   * `TELEGRAM_CHAT_ID` - Your unique chat ID. This ID identifies your Telegram 
     account and is the same across all Telegram bots. You can obtain this ID using 
     the [following method](https://stackoverflow.com/questions/32423837/telegram-bot-how-to-get-a-group-chat-id).
   * `PING_TIMEOUT` - The time in seconds to wait for a response for each packet 
     sent to the server. Make sure it is as lower as possible, in order to notify 
     an outage as soon as possible. But, do not set it too low, in order to prevent 
     false negatives.
   * `PING_REQUESTS` - The number of packets to send per each host.
   * `PING_HOSTS` - A list of hosts to test with. You mast provide one or more hosts 
     or IPs separated by spaces.

## Usage
Just run the service the following way from the project directory:
```$xslt
node app.js
```

If you want to make sure the service is up and running all the time, you can a wonderful service called [pm2](https://github.com/Unitech/pm2).  
Install 'pm2' and run it:
```$xslt
pm2 start app.js
```
This will run the process as a daemon.  
To stop the process, just run:
```$xslt
pm2 stop app.js
```

Enjoy!

---

If you like my work, support it [here](https://slavik.meltser.info/).

