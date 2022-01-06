'use strict'
const fs = require('fs');
const { Client, Intents, Collection, MessageEmbed } = require('discord.js');
const { prefix } = require('./config.json');
require('dotenv').config();
const { token } = process.env;
const nopedb = require("nope.db");
global.db = new nopedb({
    path: "./datastore.json",
    seperator: ".",
    spaces: 2
});
const Keyv = require('keyv');
global.keyv = new Keyv();
const client = new Client({ intents: [32767]});
client.commands = new Collection();
const komendyFiles = fs.readdirSync('./komendy').filter(file => file.endsWith('.js'));
const Events = fs.readdirSync('./eventy').filter(a => a.endsWith('.js'));
for (const file of komendyFiles) {
	const komendy = require(`./komendy/${file}`);
	client.commands.set(komendy.name, komendy);
	for (const _swagcat of `${file} jako ${komendy.name}\n`) {
		process.stdout.write(_swagcat);
	}
}
for (const file of Events) {
	const event = require(`./eventy/${file}`);
	if (event.once) {
		client.once(event.eventName, (...args) => event.execute(...args));
	} else {
		client.on(event.eventName, (...args) => event.execute(...args));
	}
	// process.stdout.write(``);
	for (const swagcat of `${file} jako ${event.eventName}, uruchamiane ${event.once ? 'jeden raz' : 'zawsze'}\n`) {
		process.stdout.write(swagcat);
	}
}

// client.on('debug', async (debug) => {
//     console.log(debug);
// });
client.on('messageCreate', async message => {
    const { Permissions } = require('discord.js');
	if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;

    // if (message.channel.id !== '818382652338995210') {
    //     if (message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
    //         undefined;
    //     } else {
    //         return;
    //     }
    // }

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const komendy = args.shift().toLowerCase();


	if (!client.commands.has(komendy)) return message.reply('Komenda nie istnieje sadge');

	try {
		client.commands.get(komendy).execute(message, args, db);
	} catch (error) {
		console.error(error);
		message.reply(`Wystąpił błąd podczas wykonywania komendy ${komendy}\nJak błąd się powtarza, prześlij ten błąd do <@!526711537373806592> (pass the burrito down#4261) [526711537373806592]\nBłąd: ${error}`);
	}
});
process.on('unhandledRejection', async (a) => {
	process.stdout.write(`${a.name}: ${a.message}\n`);
});

client.login(token);