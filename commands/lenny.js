const commands = require("bananenbase").command;

module.exports = class lenny extends commands {
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
        let lennyArray = ["( ͡° ͜ʖ ͡°)", "(づ｡◕‿‿◕｡)づ", "┬┴┬┴┤° ͜ʖ ͡°) ├┬┴┬┴", "(ง'̀-'́)ง", "(づ￣ ³￣)づ", "◉_◉", "( ͡ᵔ ͜ʖ ͡ᵔ )", "༼ʘ̚ل͜ʘ̚༽", "(ʘ‿ʘ)", "(✿'‿`)", ">_>"]
        let chosen = Math.floor(Math.random() * Math.floor(lennyArray.length - 1));
        if(!await this.client.db.get("lastLenny") { 
          await this.client.db.set("lastLenny", chosen)
          return msg.channel.send(lennyArray[chosen];
        } else{
          let previousChosen = this.client.db.get("lastLenny")
          if (previousChosen == chosen) {
            this.run(msg, args);
            return;
          } else {
            await this.client.db.set("lastLenny", chosen)
            return msg.channel.send(lennyArray[chosen];
          }
        }
      }
  
  }