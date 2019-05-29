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
     If you don't see the Chat ID, make sure that you have subscribed to the bot from your Telegram account (Enter the bot page and press "Start")
   * `PING_TIMEOUT` - The time in seconds to wait for a response for each packet 
     sent to the server. Make sure it is as lower as possible, in order to notify 
     an outage as soon as possible. But, do not set it too low, in order to prevent 
     false negatives.
   * `PING_REQUESTS` - The number of packets to send per each host.
   * `PING_HOSTS` - A list of hosts to test with. You mast provide one or more hosts 
     or IPs separated by spaces.
   * `HEARTBEAT_FREQUENCY` - The time in seconds that indicates how much time to wait 
     between requests (When all request are done). For example, if the requests take 
     2 seconds, and `HEARTBEAT_FREQUENCY` is set to 5 seconds, this means that the 
     time between the start of the first request request and the start of the second 
     one is 7 seconds. If set to 0, the requests will occur one after the other, 
     without any delay - Not recommended.

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

## Notes
This service may consume a lot of network traffic. Therefore, you need to be considered 
with your configurations. Too many (hundreds and more) hosts may consume a lot of CPU 
resources (because each host runs in parallel in one batch) and consume a lot of 
network traffic.  
Also, make sure to set the `HEARTBEAT_FREQUENCY` to be at least greater than 1 second, 
as setting it to lower may overload your LAN and router.  
 

Enjoy!

---

If you like my work, support it [here](https://slavik.meltser.info/).

