const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 let helpembed = new Discord.RichEmbed()
 .setDescription("~Lista Komend~")
 .setColor("#86d300")
 .addField("**Ban**", "a!ban @user [powód]")
 .addField("**Kick**", "a!kick @user [powód]")
 .addField("**Warn**", "a!warn @user [powód]")
 .addField("**Report**", "a!report @user [powód]")
 .addField("**Clear**", "a!clear (na przykład) [5]")
 .addField("**Say**", "a!say (na przykład) [Siema Ludzie; Elo Elo]")
 .addField("**Tempmute**", "a!tempmute @user (na przykład) [120s]")
 .addField("**Severinfo**", "a!serverinfo")
 .addField("**Botinfo**", "a!botinfo")
 .addField("**8ball**", "a!8ball [pytanie]")

    return message.channel.send(helpembed);
  }

module.exports.help = {
  name: "help"
}
