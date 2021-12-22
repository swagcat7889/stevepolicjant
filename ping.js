// 'use strict'
// module.exports = {
// 	name: 'ping',
// 	description: 'Ping!',
// 	async execute(message, args, izoTable) {
// 		return await message.reply(`Ping lub pong? ${message.client.ws.ping}ms pingu po ,stronie api discorda, ${Date.now() - message.createdTimestamp}ms pingu wiadomości!`);
// 		// const start = Date.now();
// 		// izoTable.fetchAll();
// 		// message.channel.send(`Pong!\n${message.client.ws.ping} gateway heartbeat\n${Math.abs(message.createdTimestamp - Date.now())}ms ping wiadomości\n${Math.abs(start - Date.now())}ms database ping`);
// 	},
// };
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		return interaction.reply({ content: `Pong! ${interaction.ws.ping}`, ephemeral: true });
	},
};