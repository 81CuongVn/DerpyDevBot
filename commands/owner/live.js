const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const inlineReply = require('inlinereply');

module.exports = {
  name: "live",
  aliases: ["notify"],
  ownerOnly: {
  status: true,
},
code: async(message, args) => {
  
const liveembed = new MessageEmbed()
       .setTitle('DerpyDev Went Live!')
       .setDescription(`DerpyDev Is Streaming **${args.join(" ")}**. Come Join And Say Hello! https://twitch.tv/derpydev/`)
       .setFooter('dd!scedule for when he goes live')
       .setColor('PURPLE')
       message.delete()
   .then(message.channel.send(liveembed));
    }
};