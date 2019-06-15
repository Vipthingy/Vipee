const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("589429443886317568")
setInterval(function() {
channel.send(`i got depressed for some reason ):::`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
