module.exports = {
    "eventName": "messageUpdate",
	once: false,
    async execute(messag) {
        const { reactions } = messag;
	    const { message } = reactions
        const {wordlist:w} = require('../config.json');
		for (let i = 0; i < w.length; i++) {
			const word = w[i];
			if (message.content.includes(word)) return message.delete();
			if (message.content.trim().includes(word)) return message.delete();
			if (message.content.toLowerCase().includes(word)) return message.delete();
			if (message.content.toUpperCase().inclues(word)) return message.delete();
		}
    }
}