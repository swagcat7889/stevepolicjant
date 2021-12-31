module.exports = {
    "eventName": "guildMemberAdd",
    once: false,
    async execute(guildmember) {
        console.log(guildmember);
    }
}