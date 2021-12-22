const {MessageEmbed} = require('discord.js');
module.exports = {
    "eventName": "messageCreate",
    once: false,
    async execute(message) {
        if (message.author.bot) return;
        if (message.content.toLowerCase().includes('kid')) return;
        if (message.content.toLowerCase().includes('nigg')) return;
        if (message.content.toLowerCase().includes('ı')) return;
        if (message.content.toLowerCase().includes('î')) return;
        if (message.content.toUpperCase().includes('Ķ')) return;
        if (message.content.toUpperCase().includes('į')) return;
        if (message.content.toLowerCase().includes('kitoda')) return;
        if (message.content.toLowerCase().includes('904427822188212254')) return;
        if (message.channel.id == '818383017025601599' || message.channel.id == '830395657163636746') {
            if (message.author.id === '804401104976216105') return;
            if (message.content.length == 0) return message.delete();
            if (!message.content.startsWith('%')) {
                const embed = new MessageEmbed()
              .setTitle('Propozycja')
              .setDescription(message.content)
              .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }), 'https://canary.discord.com/channels/818374882873442314/818382652338995210/909415814774542376')
              .setFooter('%tekst aby skomentować');
            await message.delete();
            let msg = await message.channel.send({ embeds: [embed] });
            msg.react('818500463027945472');
            msg.react('818500606284660756');
            msg.react('818500463011168256');
            } else {
                await message.channel.send(`<@!${message.author.id}>: ${message.content.slice(1).replaceAll('@', '🤡')}`);
                await message.delete();
            }
        } else {}
    }
}