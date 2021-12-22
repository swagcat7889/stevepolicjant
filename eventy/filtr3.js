module.exports = {
    "eventName": "messageDelete",
    once: false,
    async execute(message) {
        if (message.author.bot) return;
        if (message.mentions.users.size !== 0) {
            const victim = message.author;
            async function izolatka(victim, message) {
                let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
                const izolatka = new MessageEmbed()
                .setTitle('Izolatka')
                .addFields(
                    { name: 'Administrator', value: message.author.tag},
                    { name: 'Stivek', value: victim.tag},
                    { name: 'czas', value: '30m' },
                    { name: 'Powód', value: 'Automatyczna unizolatka'}
                );
                const unizolatka = new MessageEmbed()
                .setTitle('Izolatka')
                .addFields(
                    { name: 'Administrator', value: message.author.tag},
                    { name: 'Stivek', value: victim.tag},
                    { name: 'czas', value: '30m' },
                    { name: 'Powód', value: '3 warny'.replaceAll('`', '')}
                );
    
                await ch.send({ embeds: [izolatka] });
                await sleep(18000000);
                let role = message.member.guild.roles.cache.find(role => role.id === "821698344728002562");
                let role2 = message.member.guild.roles.cache.find(role => role.id === "818531125819080736");
                if (role) message.guild.members.cache.get(victim.id).roles.add(role);
                if (role2) message.guild.members.cache.get(victim.id).roles.remove(role2);
                ch.send({ embeds: [unizolatka] });
            }
            db.set(message.author.id, db.get(message.author.id)+1);
            message.channel.send(`Nie ładnie ghostpingować <@${message.author.id}>...`).then((mesg) => setTimeout(mesg.delete, 1000));
            const warny = await db.get(`${victim.id}`);
            if (warny >= 3) {
                let role = message.member.guild.roles.cache.find(role => role.id === "821698344728002562");
                let role2 = message.member.guild.roles.cache.find(role => role.id === "818531125819080736");
                if (role) message.guild.members.cache.get(victim.id).roles.remove(role);
                if (role2) message.guild.members.cache.get(victim.id).roles.add(role2);
                let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
            }
            if (warny >= 3) await db.remove(`${victim.id}`);
            if (warny >= 3) {
                izolatka(victim, message);
                return warny+' **IZOLATKA**';
            }
        }
    }
}