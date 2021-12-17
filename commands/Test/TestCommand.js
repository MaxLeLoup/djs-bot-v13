const { MessageEmbed } = require("discord.js");

module.exports.run = (bot, message, args) => {
  message.channel.send('Teste !')
};

module.exports.help = {
  name: 'teste',
  aliases: ['test'],
  category: 'Teste',
  description: 'Renvoie le message pour tester le bot.',
  cooldown: 5,
  usage: '',
}
