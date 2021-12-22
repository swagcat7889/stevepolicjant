module.exports = {
    "eventName": "guildMemberRemove",
    once: false,
    async execute(guildmember) {
        console.log(guildmember);
    }
}