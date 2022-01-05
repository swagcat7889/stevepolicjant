const { MessageEmbed } = require("discord.js");

module.exports = {
    "name": "warny",
    async execute(message, args, db) {
        const mention = message.mentions.users.first() || message.author;
        function warns(id, db) {
            return db.get(id) || 0;
        }
        const embed = new MessageEmbed().
        setTitle(`Warny ${mention.tag}`).
        setDescription(`${mention.tag} ma ${warns(mention.id, db)} warnów.`);
        return message.reply({ embeds: [embed] });  
    }
}