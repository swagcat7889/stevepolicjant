module.exports = {
    "eventName": "guildMemberAdd",
    once: false,
    async execute(guildmember) {
        if (guildmember.user.id == '725614091611406386' || guildmember.user.id == '610741863191674901') {
            console.log('kurwa pierdolony poranny obiad');
            const channel = client.channels.cache.get('818382525310173185');
            channel.send('<@526711537373806592> <@610741863191674901> lub <@725614091611406386> znowu omija izolatkę');
        }
            if (guildmember.id === '481013601423851530') {
            let role = guildmember.member.guild.roles.cache.find(role => role.id === "818531125819080736");
            if (role) guildmember.guild.members.cache.get(victim.id).roles.add(role);
        }
        console.log(guildmember);
    }
}