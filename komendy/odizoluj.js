'use strict'
module.exports = {
    "name": "odizoluj",
    "description": "Tylko nie wypuszczaj pudiniego!",
    async execute(message, args, izoTable) {
        if(!message.member.roles.cache.some(role => role.id === '834446487403364392')) return message.reply('nie');
        let victim = await message.mentions.users.first();
        if (!victim) {
            return message.reply({ content: 'ok to nie zadziała psik psik', allowedMentions: { repliedUser: false }})
        }
        let role = message.member.guild.roles.cache.find(role => role.id === "821698344728002562");
        let role2 = message.member.guild.roles.cache.find(role => role.id === "818531125819080736");
        if (role) message.guild.members.cache.get(victim.id).roles.add(role);
        if (role2) message.guild.members.cache.get(victim.id).roles.remove(role2);
        console.log('ok');
        message.reply('I nie ma go już w izolatce');
    }
}