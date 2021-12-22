/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
module.exports = {
	name: 'eval',
	description: 'Ping!',
	async execute(message, args, izoTable) {
		if (message.author.id !== '508258776134975499')
		if (message.author.id !== '526711537373806592') return message.reply('423.').then(msg => msg.edit('423 Locked.').then(asdf => asdf.edit('https://http.cat/423')));
        const data = args.join(' ').replace(/```/g, '');
		try {
			out = eval(data);
		} catch (error) {
			out = `Nie bo error: ${error}`;
		}
		let iOut = require(`util`).inspect(out);
		message.reply(`In: ${data}\nOut: ${iOut}`);
	},
};