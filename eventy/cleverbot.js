const { NlpManager } = require("node-nlp");
const manager = new NlpManager({ languages: ["en"] });
manager.load();
module.exports = {
    "eventName": "messageCreate",
    "once": false,
    async execute(message) {
        if (!message.content.startsWith('>>')) return;
        const cmd = message.content.slice(2);
        const out = await manager.process('en', cmd);
        message.reply(`⚠️ chatbot jest jeszcze w ostrej becie, używaj na własną odpowiedzialność!\n${out.answer}`);
    }
}