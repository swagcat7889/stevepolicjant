module.exports = {
    "eventName": "messageCreate",
    once: false,
    execute(message) {
        if(message.member.roles.cache.some(role => role.id === '834446487403364392')) return
        if (message.content.includes('.ru/id') || message.content.includes('everyone') || message.content.includes('discord nitro') || message.content.includes('cuttly') || message.content.includes('bit.ly')) {
            let role = message.member.guild.roles.cache.find(role => role.id === "821698344728002562");
            if (role) message.guild.members.cache.get(message.author.id).roles.remove(role);
            message.delete();
        }
    }
}
