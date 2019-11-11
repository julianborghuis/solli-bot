const commands = require("bananenbase").command;

module.exports = class say extends commands {
  constructor(client) {
    super(client, {
      name: "lenny",
      description: "Wat zeg je, lenny?",
      category: "fun",
      subCommands: ["lenni"]
    }, {
      permLevel : 0, 
      permissions: { 
        me: ["SEND_MESSAGES"], 
        user: ["SEND_MESSAGES"] 
      }
    });
  }

    async run(msg, args) {
        let lennyArray = ["( ͡° ͜ʖ ͡°)", "(づ｡◕‿‿◕｡)づ", "┬┴┬┴┤° ͜ʖ ͡°) ├┬┴┬┴", "(ง'̀-'́)ง", "(づ￣ ³￣)づ", "◉_◉", "( ͡ᵔ ͜ʖ ͡ᵔ )", "༼ʘ̚ل͜ʘ̚༽", "(ʘ‿ʘ)", "(✿'‿`)"]
    }
  
  }