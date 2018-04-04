//import discord.js libraries
const Discord = require("discord.js");
const config = require("./config.json");
let mode = 1;

//This is a comment
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
  bot.user.setActivity('with Emotions', { type: 'PLAYING' });
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
  bot.user.setActivity('in Dreams', { type: 'PLAYING' });
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
    bot.user.setActivity('with Emotions', { type: 'PLAYING' }); 
    message.channel.send("Ready to comply!");
    mode = 1;
  }
}

else if( mode == 1){
//When a New pokemon appears or a pokemon levels up
 if(message.author.id == config.POKECORD_ID)
{

  //level up
  if(message.content.match(/\b100!```/))
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
      var purl=embed.image.url.toString();
      purl=purl.substring(purl.indexOf(purl.match(/[A-Z]/)));
      purl=purl.substring(0,purl.indexOf(purl.match(/[^A-Za-z]/)));
      if (purl == "ZwtyzSpoTGK")
        purl = "Mewtwo";
      if (purl == "EnGVvUpPvFla")
        purl = "Pikachu";
      if (purl == "AwhJEbFjPny")
        purl = "Sableye";
      if (purl == "FTddeIjIvRTi")
        purl = "Gastly";
      if (purl == "LuMnrrdafnND")
        purl = "Vulpix";
      if (purl == "FmgyRqsjVuQ")
        purl = "Ninetales";
      if (purl == "BoRNRwCIno")
        purl = "Espeon";
      if (purl == "UlaeTRHTQKPZ")
        purl = "Sylveon";
      if (purl == "VHqyKhNEQFty")
        purl = "Umbreon";
      if (purl == "WwEkVykHXvni")
        purl = "Flareon";
      if (purl == "VyEviGywEOl")
        purl = "Glaceon";
      if (purl == "CzNDTVh")
        purl = "Vaporeon";
      if (purl == "PzJhuXvooAxu")
        purl = "Jolteon";
      if (purl == "HPNnLbWftdv")
        purl = "Leafeon";
      if (purl == "TdJFNIbZLtD")
        purl = "Rockruff";
      if (purl == "QzTTypudiXg")
        purl = "Lycanroc";
      if (purl == "RYgHJuvUUT")
        purl = "Necrozma";
      if (purl == "YbkjWOSQYGT")
        purl = "Cosmog";
      if (purl == "OXgNulEK")
        purl = "Solgaleo";
      if (purl == "KkFJEJvHIk")
        purl = "Lunala";
      if (purl == "CLMXnAHoJBHz")
        purl = "Arceus";
      if (purl == "ABILovbRKFj")
        purl = "Articuno";
      if (purl == "QsIWrEOWzdFZ")
        purl = "Azelf";
      if (purl == "XSBkJJPKDr")
        purl = "Celebi";
      if (purl == "GVUFalDTQCu")
        purl = "Cobalion";
      if (purl == "GVUFalDTQCu")
        purl = "Cresselia";
      if (purl == "PymtoiCJkjfF")
        purl = "Darkrai";
      if (purl == "KFBEarCORUNx")
        purl = "Deoxys";
      if (purl == "EyrnISUymuXj")
        purl = "Dialga";
      if (purl == "VgFYcpQTuGcL")
        purl = "Entei";
      if (purl == "LRzWPtwPpUGf")
        purl = "Genesect";
      if (purl == "LjZxfPivZxG")
        purl = "Giratina";
      if (purl == "HyEzrFRvvf")
        purl = "Groudon";
      if (purl == "IDyvqbxkSK")
        purl = "Heatran";
      if (purl == "NKcRJRyzXtCs")
        purl = "Ho-Oh";
      if (purl == "KGpuxmLsNU")
        purl = "Jirachi";
      if (purl == "QRnPhHMru")
        purl = "Keldeo";
      if (purl == "ZjNWcRpYeL")
        purl = "Kyogre";
      if (purl == "FYRxKEoKrDsn")
        purl = "Kyurem";
      if (purl == "DOWDgxkTBKN")
        purl = "Landorus";
      if (purl == "UlaoIUTYzze")
        purl = "Latias";
      if (purl == "HMJOYWOrpfI")
        purl = "Latios";
      if (purl == "YyBjmtLqNJb")
        purl = "Lugia";
      if (purl == "OhHdWsAIonRP")
        purl = "Manaphy";
      if (purl == "MuvAg")
        purl = "Meloetta";
      if (purl == "ZrtVXpOsXYD")
        purl = "Mesprit";
      if (purl == "GOvTOLWUXLyi")
        purl = "Mew";
      if (purl == "ZkYQHqyjWHF")
        purl = "Moltres";
      if (purl == "PKoCOJhjCQ")
        purl = "Palkia";
      if (purl == "VyZGhxJJYF")
        purl = "Phione";
      if (purl == "EZuvTLLhEpDT")
        purl = "Raikou";
      if (purl == "UUbmdNYWQGe")
        purl = "Rayquaza";
      if (purl == "PegdgOrDJauX")
        purl = "Regice";
      if (purl == "HXUuofxeSJe")
        purl = "Regigigas";
      if (purl == "BQlppBYsqWJX")
        purl = "Regirock";
      if (purl == "PegdgOrDJauX")
        purl = "Registeel";
      if (purl == "AQPPuTcdnBu")
        purl = "Reshiram";
      if (purl == "DfKyJVhlQ")
        purl = "Shaymin";
      if (purl == "IPCdYBDsYZRO")
        purl = "Silvally";
      if (purl == "DGccLGDwfAr")
        purl = "Suicune";
      if (purl == "FnkfCFfHGeI")
        purl = "Terrakion";
      if (purl == "KnjGZlmuVNLD")
        purl = "Thundurus";
      if (purl == "RmINoasKJHQM")
        purl = "Type: Null";
      if (purl == "GYtnnnXrY")
        purl = "Uxie";
      if (purl == "XAHqDsmsnYPy")
        purl = "Xerneasl";
      if (purl == "BCkOKdujjXJL")
        purl = "Yveltal";
      if (purl == "EtfoHCBPdbWf")
        purl = "Zygarde";
      if (purl == "JqIQArvMEW")
        purl = "Virizion";
      if (purl == "AZnqbchL")
        purl = "Zapdos";
      if (purl == "DzioNyoHsd")
        purl = "Zekrom";

      if(config.TO_CATCH.indexOf(purl) == -1)
        return;
      message.channel.send("p!catch "+purl);
      var newpoke = new Discord.RichEmbed()
        .setTitle("New Pokemon Spotted!")
        .setThumbnail(embed.image.url)
        .setColor("#22dd22")
        .setFooter(message.createdAt.toString().substring(0,message.createdAt.toString().indexOf('+')))
        .addField("Server", message.guild.name)
        .addField("Channel", message.channel.name)
        .addField("Pokemon", purl);
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