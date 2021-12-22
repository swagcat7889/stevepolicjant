module.exports = {
    "eventName": "ratelimit",
    execute(a) {process.stdout.write(require('util').inspect(a)+'\n');}
}