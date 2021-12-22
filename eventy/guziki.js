module.exports = {
    "eventName": "interactionCreate",
    once: false,
    execute (interaction) {
        if (!interaction.isButton()) return;
        switch (interaction.customId) {
            case 'sperk':
                interaction.reply({ content: `help\nping\naktualizacje`, ephemeral: true });
                break;
            case 'bperk':
                interaction.reply({ content: 'Zajrzyj tutaj w przyszłości!', ephemeral: true });
                break;
            case 'aperk':
                interaction.reply({ content: 'izoluj\nodizoluj\nwarn\nclear', ephemeral: true });
                break;
            case 'dperk':
                interaction.reply({ content: `eval`, ephemeral: true });
                break;
        }
    }
}