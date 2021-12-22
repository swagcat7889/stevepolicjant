module.exports = {
    "eventName": "ready",
    once: true,
    async execute() {
        process.stdout.write('Steve Policjant jest online!\n');
    }
}