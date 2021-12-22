'use strict'
const { MessageEmbed } = require('discord.js');
module.exports = {
	name: 'warn',
	description: 'Ping!',
	async execute(message, args, db) {
		const ch = message.client.channels.cache.get('818525476283875338');
		if (message.author.id !== '526711537373806592')
		if(!message.member.roles.cache.some(role => role.id === '834446487403364392')) return message.reply('nie');
		let victim = await message.mentions.users.first();
		console.log(victim);
		console.log('hcr works');
		async function izolatka(victim, message) {
			let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
			const izolatka = new MessageEmbed()
			.setTitle('Izolatka')
			.addFields(
				{ name: 'Administrator', value: message.author.tag},
				{ name: 'Stivek', value: victim.tag},
				{ name: 'czas', value: '30m' },
				{ name: 'Powód', value: args.join(' ').replaceAll('`', '')}
			);
			const unizolatka = new MessageEmbed()
			.setTitle('Izolatka')
			.addFields(
				{ name: 'Administrator', value: message.author.tag},
				{ name: 'Stivek', value: victim.tag},
				{ name: 'czas', value: '30m' },
				{ name: 'Powód', value: args.join(' ').replaceAll('`', '')}
			);

			await ch.send({ embeds: [izolatka] });
			await sleep(18000000);
			let role = message.member.guild.roles.cache.find(role => role.id === "821698344728002562");
			let role2 = message.member.guild.roles.cache.find(role => role.id === "818531125819080736");
			if (role) message.guild.members.cache.get(victim.id).roles.add(role);
			if (role2) message.guild.members.cache.get(victim.id).roles.remove(role2);
			ch.send({ embeds: [unizolatka] });
		}
		async function checkwarn(victim, db) {
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
			return warny;
		}
		if (!victim) {
			return message.reply({ content: 'kogo chcesz zwarnować?' });
		} else {
			await db.set(`${victim.id}`, await db.get(`${victim.id}`)+1);
			const cat = new MessageEmbed()
			.setTitle('Warn')
			.addFields(
				{ name: 'Administrator', value: message.author.tag},
				{ name: 'Stivek', value: victim.tag},
				{ name: 'Powód', value: args.join(' ') === undefined ? 'Nie podano powodu' : args.join(' ')}
			)
			.setTimestamp();
			await ch.send({ embeds: [cat] })
			message.reply(`${victim.username} dostał warna. Ilość warnów: ${await checkwarn(victim, db)}`);
		}
	},
};