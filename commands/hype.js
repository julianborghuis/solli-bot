const commands = require("bananenbase").command;

module.exports = class hype extends commands {
  constructor(client) {
    super(client, {
      name: "hype",
      description: "CHOO CHOO!",
      category: "fun",
      subCommands: ["hypee"],
    }, {
      permLevel : 0, 
      permissions: { 
        me: ["SEND_MESSAGES"], 
        user: ["SEND_MESSAGES"] 
      }
    });
  }

    async run(msg, args) {
            let hype = ['https://cdn.discordapp.com/attachments/102817255661772800/219514281136357376/tumblr_nr6ndeEpus1u21ng6o1_540.gif',
                 'https://cdn.discordapp.com/attachments/102817255661772800/219518372839161859/tumblr_n1h2afSbCu1ttmhgqo1_500.gif',
                 'https://gfycat.com/HairyFloweryBarebirdbat',
                 'https://i.imgur.com/PFAQSLA.gif',
                 'https://abload.de/img/ezgif-32008219442iq0i.gif',
                 'https://i.imgur.com/vOVwq5o.jpg',
                 'https://i.imgur.com/Ki12X4j.jpg',
                 'https://media.giphy.com/media/b1o4elYH8Tqjm/giphy.gif']
         let chosen = Math.floor(Math.random() * Math.floor(hype.length - 1));
         let send = 'CHOO CHOO ${hype[chosen]}'
         await msg.channel.send(send)  
      }
  
  }