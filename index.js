const Discord = require("discord.js")
const client = new Discord.Client()

client.once('ready', () => {
	console.log('Ready!');
});

client.login(proccess.env.TOKEN);
//listening to msgs
client.on('message', msg => {
	console.log(msg.content);
});