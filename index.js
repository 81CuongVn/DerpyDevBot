//bot packages
const Discord = require('discord.js')
;
const disbut = require("discord-buttons");
const client = new Discord.Client
()
disbut(client);
require('./server.js');
const cmd = require('dezirehandler.js');
const sett = require('./settings.json');

//command handler
const handler = new cmd.Handler({
folder: "./commands",
client: client,
prefix: "dd!",
owner: ["909382095170834472"],
});
handler.start();

//sets activity & notifys when online
client.on('ready', () => {
client.user.setActivity(`${sett.activity}`, {
type: `${sett.activitytype}`
})
console.log(`${client.user.tag} is ${sett.activitytype} ${sett.activity}`)
});

//starts the bot
client.login(process.env.TOKEN);