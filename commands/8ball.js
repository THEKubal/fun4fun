const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!args[2]) return message.replay("Zadaj Całe Pytanie!!");
  let replies = ["Tak", "Nie", "Nie wiem", "Zapytaj Później"];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(1).join(" ");

  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#FF9900")
  .addField("Pytanie", question)
  .addField("Odpowiedź", replies[result]);

  message.channel.send(ballembed);
}

module.exports.help = {
  name: "8ball"
}
