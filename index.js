const { Client, Collection } = require('discord.js');
const { loadCommands, loadEvents } = require("./util/loader.js")
const { TOKEN } = require('./config/config.js');

const bot = new Client();
["commands", "cooldowns"].forEach(x => client[x] = new Collection());

loadCommands(bot);
loadEvents(bot);

bot.login(TOKEN);
