// Requireing the package
const BananenBase = require("bananenbase");

new BananenBase({
  token: "TOKEN", 
  database: {
    package: "json", 
    name: ".tmp_database.json"
  },
  language: "NL",
  bot: (client) => {
    console.log("-/READY\-")
  },
  settings: true,
  botConfig: __dirname + "config.json",
  prefix: "solli!", 
  ignore: { 
    bot: true, 
    pm: false 
  },
  consoleFunctions: true,
  permissionLevels: [ 
    (client, message, args) => {
      return true; 
    },
    (client, message, args) => { 
      if (client.config.botOwners.includes(message.author.id)) return true; 
      return false; 
    }
  ],
  pmPrefix: false, 
  webPort: 80 
});
