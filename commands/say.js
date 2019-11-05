const commands = require("bananenbase").command;

module.exports = class say extends commands {
  constructor(client) {
    super(client, {
      name: "say",
      description: "Let the bot say something",
      category: "Owner",
      subCommands: ["s"],
      args: ["What the bots should say : required"]
    }, {
      permLevel : 1, 
      permissions: { 
        me: ["SEND_MESSAGES"], 
        user: ["SEND_MESSAGES"] 
      }
    });
  }

    async run(msg, args) {
        if (!args) return msg.channel.send("Wat wil je dat de bot gaat zeggen?")
        try{
          let say = args.join("")
          msg.channel.say(say)
          await msg.delete()
        }
    }
  
  }