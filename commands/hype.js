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
            let hype = ['https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/5e/cf/72/5ecf7249-e692-a809-f102-c7ed3d78427b/source/600x600bb.jpg',
                 'https://thumbs.gfycat.com/ScentedLameBlackwidowspider-size_restricted.gif',
                 'https://i.imgur.com/OVbReSh.gif',
                 'http://www.ghostwhalelondon.com/wp-content/uploads/2019/02/5c5ad7259e42b911d3055365.jpg',
                 'https://t0.rbxcdn.com/632cfb96c0c6002c08091974c38d82b9',
                 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfvmjgendf-y0q6QTYDyXbCnW_aOmtVMF5lNTg5op9iS3ODjEo']
         let chosen = Math.floor(Math.random() * Math.floor(hype.length - 1));
         let send = 'CHOO CHOO ${hype[chosen]}'
         await msg.channel.send(send)  
      }
  
  }