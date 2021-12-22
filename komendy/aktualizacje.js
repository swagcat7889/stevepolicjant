module.exports = {
    "name": "aktualizacje",
    "description": "aktualizacje bota",
    async execute(message, args) {
        message.reply(
            `
            Steve Policjant v2.3.0
            SemVer **PATCH**: *jak się nie mylę*: Naprawiono błąd, czyli kword na propozycjach,
            SemVer **PATCH**: *^* Naprawiono błąd, kiedy napisałeś nworda i kworda jednocześnie bot miał błąd w konsoli,
            SemVer **PATCH**: Naprawiono bota wkurzającego siebie na to, że sam siebie ghostpinguje,
            SemVer **PATCH**: Zoptymalizowano kod,
            SemVer **MINOR**: Dodano komendę clear dla administracji,
            SemVer **MINOR**: Dodano komendę \`aktualizacje\`, z której właśnie korzystasz :).
            `
            )
    }
}