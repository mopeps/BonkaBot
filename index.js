const Discord = require("discord.js")
const fetch = require("node-fetch")
const Database = require("@replit/database")
const fs = require("fs")
const stayingAlive = require("./server")
const extras = require("./extras.js")



const db = new Database()
const client = new Discord.Client()
let adjetivosMaster = ["pa","rey","master","maestro","king","titan","bestia","facha","bro","sistah"]

let esteEs = ["jajaj un capo"]

db.get("esUn").then(esUn => {
  if (!esUn || esUn.length < 1) {
    db.set("esUn", esteEs)
  }
})

client.once('ready', () => {
	console.log('Ready!');
});

//listening to msgs
client.on('message', msg => {
  if(msg.author.bot) return;

  if (msg.content.match(/marco/i) && msg.content.length <= 7 ) {
    msg.channel.send('Poloo!');
  }
  if (msg.content.match(/gracias/i)) {
    msg.channel.send('de nada ' + adjetivosMaster[extras.random(adjetivosMaster.length)]);
  }
  if (msg.content.match(/shut up bitch start sucking/i)) {
      msg.channel.send("I don't give a fuck about yo' husband");
  }
  extras.answerQuestion(msg);
  extras.alguienEs(msg,db);

});


stayingAlive()
client.login(process.env.TOKEN);
