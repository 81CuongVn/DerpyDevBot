const Discord = require('discord.js');
const inlineReply = require('inlinereply') ;
const { MessageEmbed } = require('discord.js');
const disbut = require('discord-buttons');
const { MessageButton } = require('discord-buttons');

module.exports = {
name: "bot",
aliases: ["invite", "repo", "repository"],
code:  async(message, client, args) => {

const bot = new MessageEmbed()
     .setTitle("All Of The Bot's Info")
     .addField('Invite', 'My Invite Link')
     .addField('Repository', 'My Source Code')
     .setFooter("There Are Some Hidden Features Inside Me")
.setColor('PURPLE');

var repo = new disbut.MessageButton()
      .setStyle("url")
      .setURL("https://github.com/derpythedev/DerpyDevBot")
      .setLabel('Respository');

var invite = new disbut.MessageButton()
      .setStyle("url")
      .setURL("https://discord.com/api/oauth2/authorize?client_id=917150316082921493&permissions=126016&scope=bot")
      .setLabel('Invite');

message.channel.send(bot, { buttons: [invite, repo] });
}
};