const {MessageEmbed} = require('discord.js');
module.exports = {
    "name": "snipe",
    async execute(message, args) {
        const cache = await global.keyv.get(message.channel.id);
        if (cache === undefined || cache === null) return message.reply('404 brak snipe');
        const embed = new MessageEmbed().
        setTitle(message.author.id).
        setDescription(`Ostatnia usunięta wiadomość z kanału <#${message.channel.id}>\nAutor wiadomości: **${cache.author.tag}**\n\n**Wiadomość**\n${cache.content}`);
        return message.reply({ embeds: [embed] }).catch((err) => process.stderr.write(`${err.name}: ${err.message}\n`));
    }
}