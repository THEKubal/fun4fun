const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("Informacje O Bocie")
  .setColor("#ff0000")
  .setThumbnail(bicon)
  .addField("**Nazwa Bota**", bot.user.username)
  .addField("**Data Utworzenia**", bot.user.createdAt);

  return message.channel.send(botembed);
 }

 module.exports.help = {
   name: "botinfo"
 }
