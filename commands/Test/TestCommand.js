const { MessageEmbed } = require("discord.js");

module.exports.run = (bot, message, args) => {
  message.channel.send('Teste !')
};

module.exports.help = {
  name: 'vocal',
  aliases: ['vc'],
  category: 'stats',
  description: 'Renvoie les infos sur les personnes en vocal.',
  cooldown: 5,
  usage: '',
}