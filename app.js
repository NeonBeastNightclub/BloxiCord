// BloxiCord Discord Bot Code
// Version: 0.01 ALPHA
// Discord Code: WxUPp3P

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '~';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}! There are no apparent major bugs on BloxiCord.`);
    client.user.setPresence({ game: { name: 'on servers! | ~help', type: '3' } });
    client.user.setStatus("online");
  });

  client.on("message", function(message) {
  if (message.author.equals(client.user)) return;

  if (!message.content.startsWith(prefix)) return;

  var args = message.content.substring(prefix.length).split(" ");
  
   switch (args[0].toLowerCase()) {
  
  case "help":
  message.author.sendMessage("Hello there! ");
  
  case "kick":
let modRole = message.guild.roles.find("name", "Admin");
if (!message.member.roles.has(modRole.id)){
return message.reply("You don't have the role Admin.");
}
if (message.mentions.users.size == 0){
return message.reply("Please mention a user.");
}
let kickMember = message.guild.member(message.mentions.users.first());
if (!kickMember){
return message.reply("Invalid user"); 
}
if (!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")){
return message.reply("I don't have permissions, woops!");
}
kickMember.Kick();
kickMember.sendMessage("You have been removed from the $(message.Guild.Name) server. You can rejoin.");
let logs = message.guild.channels.find("name", "Logs");
logs.sendMessage("$(kickMember) has been kicked from the server!")

break;
  
  defult:
  message.channel.sendMessage(" :no_entry:  That command is invalied. The prefix is **~**. For a list of valid commands do **~cmds!**");
    } 
})

client.login(process.env.TOKEN);
