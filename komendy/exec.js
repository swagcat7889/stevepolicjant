const {execSync:exec} = require('child_process');
module.exports = {
  "name": "exec",
  async execute(message, args) {
    if (message.author.id !== '526711537373806592') return;
    try {
        return message.reply(require('util').inspect(exec(args.join(' ')).toString()));
    } catch (err) {
        return message.reply('err');
    }
  }
}