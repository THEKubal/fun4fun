const Discord = require("discord.js");

   module.exports.run = async (bot, message, args) => {
   let sicon = message.guild.iconURL;
   let serverembed = new Discord.RichEmbed()
   .setDescription("Server Information")
   .setColor("#ff0000")
   .setThumbnail(sicon)
  .addField("**Server Name**", message.guild.name)
  .addField("**Date of creation**", message.guild.createdAt)
  .addField("**Join**", message.member.joinedAt)
  .addField("**Members**", message.guild.memberCount);

   return message.channel.send(serverembed);
 }





module.exports.help = {
  name: "serverinfo"
}
