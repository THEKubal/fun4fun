const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();



fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});


bot.on("ready", async () => {
  //-------------- Changigng Game -----------------
   var czas = 120; //czas do zmiany gry w sekundach

   let gry = ["Flejmuś Nasz Król", "a!help", "Zapraszaj Znajomych!"]; //tu wpisujesz w cudzysłowach po przecinku grę która może siępojawić

   let result = Math.floor((Math.random() * gry.length));

   bot.user.setActivity(gry[result], {type: "PLAYING"});
   console.log(`Gra Ustawiona: ${gry[result]}

Nastepna gra zmieni sie za ${czas} sekund`);

   setInterval(function () {

       let result = Math.floor((Math.random() * gry.length));

       bot.user.setActivity(gry[result], {type: "PLAYING"});
   }, czas * 1000);
});

bot.on("guildMemberAdd", async member => {
  console.log(`${member.id} joined the server. Welcome ${member.id}`);

  let welcomechannel = member.guild.channels.find(`name`, "welcome_-_leave")
  welcomechannel.send(`Look out everyone ${member} has joined the server🎉`);
});

bot.on("guildMemberRemove", async member => {
  console.log(`${member.id} left the server`)

    let welcomechannel = member.guild.channels.find(`name`, "welcome_-_leave")
    welcomechannel.send(`Och No! ${member} has left the server😞`);
});


bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;


  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);


});

bot.login(tokenfile.token);
