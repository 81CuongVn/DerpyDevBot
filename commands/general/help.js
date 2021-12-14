const Discord = require('discord.js');
const inlineReply = require('inlinereply') ;
const { MessageEmbed } = require('discord.js');

module.exports = {
name: "help",
aliases: ["commands", "cmds"],
code:  async(message, client, args) => {

message.inlineReply(new MessageEmbed()
      .setTitle("All Of My Commands")
      .addField('dd!info', 'See What DerpyDev Is About')
      .addField('dd!scedule', 'Check When DerpyDev Is Live')
      .addField('dd!viewers', 'View All Of The Viewers That Was In The Live Stream While The Bot Was Made')
      .setFooter('I was made by DerpyDev :D')
      .setColor('PURPLE'));
}
};