const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
     if(!kUser) return message.channel.send("Can't find user!");
     let kReason = args.join(" ").slice(22);
     if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("There is no!");
     if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I can't ban this user");

     let kickEmbed = new Discord.RichEmbed()
     .setDescription("~Kick~")
     .setColor("#ccb400")
     .addField("**Wyrzucony Użytkownik**", `${kUser} with ID ${kUser.id}`)
     .addField("**Wyrzucony Przez**", `<@${message.author.id}> with ID ${message.author.id}`)
     .addField("**Wyrzucony na**", message.channel)
     .addField("**Czas**", message.createdAt)
     .addField("**Powód**", kReason);

     let kickChannel = message.guild.channels.find(`name`, "bany-warny-kicki-itp");
     if(!kickChannel) return message.channel.send("Can't find incidents channel.**");

     message.guild.member(kUser).kick(kReason);
     kickChannel.send(kickEmbed);

     return;
}

module.exports.help = {
  name: "kick"
}
