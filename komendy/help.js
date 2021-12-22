const { MessageActionRow, MessageButton } = require('discord.js');
module.exports = {
	name: 'help',
	description: 'Ping!',
	async execute(message, args, izoTable) {
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('sperk')
                .setLabel('Za bycie stivkiem')
                // .setDisabled(true)
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('bperk')
                .setLabel('Za boostowanie')
                // .setDisabled(true)
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('aperk')
                .setLabel('Za bycie administratorem')
                // .setDisabled(true)
                .setStyle('SUCCESS'),
            new MessageButton()
                .setCustomId('dperk')
                .setLabel('Za bycie developerem')
                // .setDisabled(true)
                .setStyle('DANGER'),
        );
		message.reply({ content: `ok kliknij w guzik i dostaniesz helpa`, components: [row]});
	},
};