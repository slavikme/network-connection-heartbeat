require('dotenv').config();
const ping = require('ping');
const zipObject = require('lodash.zipobject');

const pingSingleHost = async host => parseFloat((await ping.promise.probe(host, {
    timeout: process.env.PING_TIMEOUT,
    min_reply: process.env.PING_REQUESTS
})).min) || null;

const pingHosts = async hosts => zipObject(hosts, await Promise.all(hosts.map(pingSingleHost)));

const displayPings = async hosts => {
    console.time('all pings');
    const pings = await pingHosts(hosts);
    console.timeEnd('all pings');
    for ( let [host, ms] of Object.entries(pings) ) {
        console.log(ms, host);
    }
};
displayPings(process.env.PING_HOSTS.split(/\s+/));