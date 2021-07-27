const Discord = require('discord.js');
const { default_prefix } = require('../../config.json');
const ms = require('ms');

module.exports = {
name: "ping",
aliases: [""],
description: "Simple ping command",

async run(client, message, args) {

const pingEmbed = new Discord.MessageEmbed()
.setTitle('Pong!🏓')
.setDescription(`Your ping: ${Date.now() - message.createdTimestamp}\``)
.setColor("RANDOM")
.setTimestamp()
message.channel.send(pingEmbed)
console.log('Ping command used!')
  }
}