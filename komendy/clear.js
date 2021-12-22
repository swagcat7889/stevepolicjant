const { MessageEmbed } = require('discord.js');
module.exports = {
    "name": "clear",
    "description": "wyczyść czat",
    async execute(message, args) {
        if(!message.member.roles.cache.some(role => role.id === '834446487403364392')) return message.reply({ content: 'Brak uprawnień' });
        if (args[0] === undefined) return message.reply({ content: 'chyba nie' });
        if (parseFloat(args[0]) == NaN) return message.reply({ content: 'To nie jest cyfra' });
        if (parseFloat(args[0]) >= 30 && message.author.id === '804401104976216105') return message.reply({ content: 'Liso to jest kurwa na ciebie za dużo' });
        if (parseFloat(args[0]) >= 100) return message.reply({ content: 'Więcej niż 100? Coś chyba za dużo...' });
        message.channel.bulkDelete(parseFloat(args[0]));
    }
}