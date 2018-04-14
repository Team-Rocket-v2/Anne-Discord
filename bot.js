﻿//import discord.js libraries
const Discord = require("discord.js");
const config = require("./config.json");
const pokedex = require("./Pokedex.json");
const my_ver = require("./package.json");
let mode = 1;

//spamtime func
function spamtime(spam_house){
  if(mode == 1)
  {
  spam_house.startTyping(3);
  spam_house.send(config.SPAM_MSG);
  spam_house.stopTyping(true);
  }
}

//waitsend func
function waitsend(client,chan,tp){
  client.channels.get(chan).send(tp);
}

//logging function
function logEnter(message, logdata)
{
  if(bot.channels.get(config.LOG_ID) && bot.channels.get(config.LOG_ID).type == "text")
    bot.channels.get(config.LOG_ID).send(logdata);
  else
    message.channel.send("Log channel not found!");
}

//Bot instance and Playing message
let bot = new Discord.Client();
bot.on("ready", function() {
  console.log('Logged in as '+bot.user.username);
  bot.user.setActivity('God', { type: 'PLAYING' });
  spam_house = bot.channels.get(config.SPAM_CHANNEL);

  //spam
  setInterval(spamtime,1500,spam_house);

});

//When a message is received
bot.on("message", function(message) {

if(message.author == bot.user) return;
if(message.channel.type == "dm") return ;

//ping
if(message.content.toLowerCase() == "!ping")
{
  let pingtime = parseInt(bot.ping);
  message.channel.send(`Po${'o'.repeat((pingtime-100)/10)}ng! ${pingtime}ms`);
}

else if(message.channel.id == config.SAY_CHANNEL && message.content.toLowerCase() == "!stop")
{
  bot.user.setActivity('with Myself', { type: 'PLAYING' });
  message.channel.send("Ugh. Humans!");
  mode = 0;
}

else if(message.channel.id == config.SAY_CHANNEL && message.content.toLowerCase() == "!start")
{
  if(mode == 1)
  {
    message.channel.send("I'm right here lol :joy:");
  }
  else
  {
    bot.user.setActivity('God', { type: 'PLAYING' });
    message.channel.send("Ready to comply!");
    mode = 1;
  }
}

else if( mode == 1){
//When a New pokemon appears or a pokemon levels up
 if(message.author.id == config.POKECORD_ID)
{

  //level up
  if(message.content.match(/\b100!```/) && message.content.indexOf(bot.user.username) != -1)
  {
    bot.channels.get(config.SAY_CHANNEL).send("p!info")
    .then(
      bot.channels.get(config.SAY_CHANNEL).send("p!n"));
    logEnter(message, message.content);
  }

  //new poke... possibly
  else
  {
  message.embeds.forEach((embed) => {
    if(embed.title){
    if(embed.title.startsWith("A wild")){
      var index = pokedex.table.findIndex(obj => obj.url==embed.image.url);
      if(!pokedex.table[index].catch)
        return;
      message.channel.send("p!catch "+pokedex.table[index].name);
      var newpoke = new Discord.RichEmbed()
        .setTitle("New Pokemon Spotted!")
        .setThumbnail(embed.image.url)
        .setColor("#22dd22")
        .setFooter(message.createdAt.toString().substring(0,message.createdAt.toString().indexOf('+')))
        .addField("Server", message.guild.name)
        .addField("Channel", message.channel.name)
        .addField("Pokemon", pokedex.table[index].name);
        logEnter(message, newpoke);
    }
    }
  });
  }
}

//Speech commands
else if(message.channel.id == config.SAY_CHANNEL && message.content.toLowerCase().startsWith("!say"))
{
  let cts = message.content.substring(5,23);
  if(bot.channels.get(cts))
  {
    bot.channels.get(cts).startTyping(3);
    setTimeout(waitsend,3000,bot,cts,message.content.substring(24));
    bot.channels.get(cts).stopTyping(true);
    message.channel.send(new Discord.RichEmbed()
      .setTitle("Scroll Delivered!")
      .setThumbnail(bot.channels.get(cts).guild.iconURL)
      .setColor("#22dd22")
      .setFooter(message.createdAt.toString().substring(0,message.createdAt.toString().indexOf('+')))
      .addField("Sender", message.author)
      .addField("Castle sent to", bot.channels.get(cts).guild.name)
      .addField("Room delivered to", bot.channels.get(cts).name)
      .addField("Content of the scroll", message.content.substring(24)));
    message.delete();
  }
  else
  {
    message.reply("Pardon me senpai! Couldn't deliver the scroll!! :frowning: ");
  }
}

//version
else if(message.channel.id == config.SAY_CHANNEL && message.content.toLowerCase().startsWith("!version"))
{
  message.channel.send(my_ver.version);
}

else if(message.channel.id == config.SAY_CHANNEL && message.content.toLowerCase().startsWith("!wsb"))
{
  if(bot.channels.get(config.WSB_GEN))
  {
    bot.channels.get(config.WSB_GEN).startTyping(3);
    setTimeout(waitsend,3000,bot,config.WSB_GEN,message.content.substring(5));
    bot.channels.get(config.WSB_GEN).stopTyping(true);
    message.channel.send(new Discord.RichEmbed()
      .setTitle("Scroll Delivered!")
      .setThumbnail(bot.channels.get(config.WSB_GEN).guild.iconURL)
      .setColor("#22dd22")
      .setFooter(message.createdAt.toString().substring(0,message.createdAt.toString().indexOf('+')))
      .addField("Sender", message.author)
      .addField("Castle sent to", bot.channels.get(config.WSB_GEN).guild.name)
      .addField("Room delivered to", bot.channels.get(config.WSB_GEN).name)
      .addField("Content of the scroll", message.content.substring(5)))
      message.delete();
  }
  else
  {
    message.reply("Pardon me senpai! Couldn't deliver the scroll!! :frowning: ");
  }
}

//Every other command
else if(message.channel.id == config.SAY_CHANNEL && message.content.startsWith("!"))
{
  if(bot.channels.get(config.SAY_CHANNEL))
  {
    bot.channels.get(config.SAY_CHANNEL).send("p"+message.content);
    message.channel.send(new Discord.RichEmbed()
      .setTitle("Scroll Delivered!")
      .setThumbnail(bot.channels.get(config.SAY_CHANNEL).guild.iconURL)
      .setColor("#22dd22")
      .setFooter(message.createdAt.toString().substring(0,message.createdAt.toString().indexOf('+')))
      .addField("Sender", message.author)
      .addField("Castle sent to", bot.channels.get(config.SAY_CHANNEL).guild.name)
      .addField("Room delivered to", bot.channels.get(config.SAY_CHANNEL).name)
      .addField("Content of the scroll", "p"+message.content));
      message.delete();
  }
  else
  {
    message.reply("Pardon me senpai! Couldn't deliver the scroll!! :frowning: ");
  }
}
}

});

//login with token
bot.login(process.env.BOT_TOKEN);
