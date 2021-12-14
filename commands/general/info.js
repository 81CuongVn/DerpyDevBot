const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const disbut = require("discord-buttons");
const { MessageButton } = require("discord-buttons");
const sett = require("../../settings.json");

module.exports = {
  name: "info",
  aliases: ["about"],
  code: async(message, client, args) => {
    const about = new MessageEmbed() 
    .setTitle("All DerpyDev's Info")
    .setDescription("I'm Also Known As DerpyTechno I'm A 14 Year Old Developer! I Code In HTML, CSS, JAVASCRIPT, & More! My Pronouns Are He/Him! I Like Streaming, Coding & Playing Games! We Have A Friendly Community On Twitch & In Discord!")
    .setColor("PURPLE")
    .setFooter("Thanks for viewing me :)");
    
    var twitch = new disbut.MessageButton() 
    .setStyle("url")
    .setURL(`https://twitch.tv/derpydev/`)
    .setLabel("Twitch")
    .setEmoji("920441830653456424");
    
    var discord = new disbut.MessageButton() 
    .setStyle("url")
    .setURL(`https://discord.gg/penis/`)
    .setLabel("Discord")
    .setEmoji("920441120364838982");
    
    var website = new disbut.MessageButton() 
    .setStyle("url")
    .setURL(`https://derpydev.tk/`)
    .setLabel("Website")
    .setEmoji("920441971372359710")
    message.channel.send(about, { buttons: [website, twitch, discord]})
  } 
};