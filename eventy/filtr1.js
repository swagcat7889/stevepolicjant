module.exports = {
    "eventName": "messageCreate",
    once: false,
    async execute(message) {
        const {wordlist:w} = require('../config.json');
		for (let i = 0; i < w.length; i++) {
			const word = w[i];
			if (message.content.includes(word)) return message.delete();
			if (message.content.trim().includes(word)) return message.delete();
		}
    }
}