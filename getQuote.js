const {RichEmbed} = require("discord.js")
const fetch = require('node-fetch');

fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=DJI&apikey=18PAD5S69XEJKIO8')
    .then(res => let result = JSON.parse(res.text().replace(/\s+/g, '').replace(/\./g, '')))
    .then(result => console.log(result));
let low = result.TimeSeries(Daily)
const embed = new RichEmbed()
.setTitle("Beurs dow jones (DJI)")


