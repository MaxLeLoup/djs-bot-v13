const { Client, Collection, Intents } = require('discord.js');
const { loadCommands, loadEvents } = require("./util/loader.js")
const { TOKEN } = require('./config/config.js');

const bot = new Client({ fetchAllMembers: true, partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'GUILD_MEMBER', 'USER'], intents: Object.keys(Intents.FLAGS) });
["commands", "cooldowns"].forEach(x => client[x] = new Collection());

loadCommands(bot);
loadEvents(bot);

bot.login(TOKEN);
