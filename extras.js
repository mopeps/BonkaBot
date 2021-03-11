const fs = require("fs")
const Discord = require("discord.js")
const Database = require("@replit/database")



function actualizarEsteEs(db,msgContent) {
    db.get("esUn").then(esUn => {
    esUn.push([msgContent])
    db.set("esUn", esUn)
  })
}

module.exports = {
  answerQuestion : (msg) => {
    if(msg.content.endsWith("?")) {
      let odds = Math.random() * Math.floor(100);
     odds >= 50? msg.channel.send("Si") : msg.channel.send("No");
   }
  },
  alguienEs : (msg,db) => {
    let msgBgning = msg.content.split(" ")[0];
    let restOfMsg = msg.content.substr(msgBgning.length + 1);
    if(msg.content.match(/_es/i)) {
      if(restOfMsg.length > 0) {
       
        actualizarEsteEs(db,restOfMsg)
      } else {
        db.get("esUn").then(esUn => {
        const esUno = esUn[Math.floor(Math.random() * esUn.length)]
        msg.channel.send(esUno)
        })
      }  
    }
  },
  random : (number) => {
    let random = Math.floor( Math.random() * Math.floor(number));
    return random;
  }



}