const fs = require('fs');
const { NlpManager } = require("node-nlp");
const manager = new NlpManager({ languages: ["en"] });
let h = require('crypto').createHash('sha512').update(fs.readFileSync('./model.nlp')).digest('hex');
manager.load();
module.exports = {
    "eventName": "messageCreate",
    "once": false,
    async execute(message) {
        if (!message.content.startsWith('>>')) return;
        const cmd = message.content.slice(2);
        const out = await manager.process('pl', cmd);
        message.reply(`⚠️ chatbot jest jeszcze w becie i umie tylko język Polski, używaj na własną odpowiedzialność!\n\n\nOdpowiedź:    ${out.answer}`);
    }
};
setInterval(async () => {
    const ha = require('crypto').createHash('sha512').update(fs.readFileSync('./model.nlp')).digest('hex');
    if (h !== ha) {
        manager.load();
        h = ha;
        process.stdout.write('Hot model reloading\n');
    };
}, 240000);