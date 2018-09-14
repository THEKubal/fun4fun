const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Nie dla psa kiełbasa!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Couldn't find them yo");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Nie dla psa kiełbasa!");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("~Warn~")
  .setAuthor(message.author.username)
  .setColor("#fc6400")
  .addField("**Warned User**", `<@${wUser.id}>`)
  .addField("**Warned In**", message.channel)
  .addField("**Number of Warn**", warns[wUser.id].warns)
  .addField("**Reason**", reason);

  let warnchannel = message.guild.channels.find(`name`, "bany-warny-kicki-itp");
  if(!warnchannel) return message.reply("*I can't find the channel*");

  warnchannel.send(warnEmbed);

  if(warns[wUser.id].warns == 3){
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole) return message.reply("You should create that role dude.");

    let mutetime = "300s";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> was muted`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> was unmuted`)
    }, ms(mutetime))
  }
  if(warns[wUser.id].warns == 6){
    message.guild.member(wUser).ban(reason);
    message.reply(`<@${wUser.id}> was banned`)
  }
}

module.exports.help = {
  name: "warn"
}
