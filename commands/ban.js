const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
     if(!bUser) return message.channel.send("Can't find user!");
     let bReason = args.join(" ").slice(22);
     if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("There is no!");
     if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I can't ban this user");

     let banEmbed = new Discord.RichEmbed()
     .setDescription("~Ban~")
     .setColor("#a9cc00")
     .addField("**Zbanowany Użytkownik**", `${bUser} with ID ${bUser.id}`)
     .addField("**Zbanowany przez**", `<@${message.author.id}> with ID ${message.author.id}`)
     .addField("**Zbanowany na**", message.channel)
     .addField("**Czas**", message.createdAt)
     .addField("**Powód**", bReason);

     let incidentchannel = message.guild.channels.find(`name`, "bany-warny-kicki-itp");
     if(!incidentchannel) return message.channel.send("Can't find incidents channel.");

     message.guild.member(bUser).ban(bReason);
     incidentchannel.send(banEmbed);


     return;
 }

module.exports.help = {
  name: "ban"
}
