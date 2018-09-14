const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let avatarembed = new Discord.RichEmbed()
  .setTitle("Cat :cat:")
  .setImage(avatar.file)
  .setColor("#FF9900");

  message.channel.send(avatarembed);
}

module.exports.help = {
  name: "avatar"
}
