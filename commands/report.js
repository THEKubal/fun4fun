const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("*Can't find user!*");
    let rreason = args.join(" ").slice(22);

     let reportEmbed = new Discord.RichEmbed()
     .setDescription("Reporty")
     .setColor("#0de2db")
     .addField("**Reportowany Użytkownik**", `${rUser} with ID: ${rUser.id}`)
     .addField("**Reportowany przez**", `${message.author} with ID: ${message.author.id}`)
    .addField("**Kanał**", message.channel)
    .addField("**Czas**", message.createdAt)
    .addField("**Powód**", rreason);

   let reportschannel = message.guild.channels.find(`name`, "logs");
   if(!reportschannel) return message.channel.send("*Can't find incidents channel.*");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "report"
}
