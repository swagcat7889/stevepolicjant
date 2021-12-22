'use strict'
module.exports = {
    "name": "izoluj",
    "description": "Izolatka dla niegrzecznego stivka! (dla przykładu pudiniego)",
    async execute(message, args, izoTable) {
        if(!message.member.roles.cache.some(role => role.id === '834446487403364392')) return message.reply('nie');
        let victim = await message.mentions.users.first();
        if (victim.bot) return message.reply('porąbany jesteś, co nie?');
        if (!victim) {
            return message.reply({ content: 'ok to nie zadziała psik psik', allowedMentions: { repliedUser: false }})
        }
        let role = message.member.guild.roles.cache.find(role => role.id === "821698344728002562");
        let role2 = message.member.guild.roles.cache.find(role => role.id === "818531125819080736");
        if (role) message.guild.members.cache.get(victim.id).roles.remove(role);
        if (role2) message.guild.members.cache.get(victim.id).roles.add(role2);
        console.log('ok');
        let msg = await message.reply(`<@${victim.id}> był złym stivem więc jest w izolatce :)`);
        msg.react('❤️');
    }
}