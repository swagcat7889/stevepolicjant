module.exports = {
    "eventName": "messageDelete",
    "once": false,
    async execute(message, args) {
        await global.keyv.set(message.channel.id, { content: message.content, author: message.author });
    }
}
// burek
// gówno na dywanie