const Discord = require('discord.js');
const inlineReply = require('inlinereply') ;
const { MessageEmbed } = require('discord.js');
const scedule = require('../../scedule.json');

module.exports = {
  name: "scedule",
  code: async(message, client, args) => {

  message.inlineReply(new MessageEmbed()
           .setTitle("When DerpyDev Is Streaming")
          .addField("Monday", `${scedule.mon}`)
          .addField("Tuesday", `${scedule.tues}`)
          .addField("Wednesday", `${scedule.wed}`)
          .addField("Thursday", `${scedule.thur}`)
          .addField("Friday", `${scedule.fri}`)
          .addField("Saturday", `${scedule.sat}`)
          .addField("Sunday", `${scedule.sun}`)
          .setColor("PURPLE"));
  }
};