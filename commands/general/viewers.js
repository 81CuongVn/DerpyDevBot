const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const inlineReply = require('inlinereply');

module.exports = {
  name: "viewers",
  aliases: ["vw"],
  code: async(message, client, args) => {

    const vwembed = new MessageEmbed()
          .setTitle('All Of The Viewers That Watched While The Bot Was Developed On My Twitch')
         .setDescription('1. [GoldenGunOW](https://twitch.tv/goldengunow)')
         .setFooter('dd!info for all my information')
         .setColor('BLUE')
    message.inlineReply(vwembed);
  }
};