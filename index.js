const Discord = require("discord.js")
const fetch = require("node-fetch")
const Database = require("@replit/database")

const db = new Database()
const client = new Discord.Client()

db


client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.TOKEN);
//listening to msgs
client.on('message', msg => {
  if (msg.content === 'marco' || msg.content === 'Marco') {
    msg.channel.send('Poloo!');
  } 
});



