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
    
  defult:
  message.channel.sendMessage(" :no_entry:  That command is invalied. The prefix is **~**. For a list of valid commands do **~cmds!**");
    } 
})

client.login(process.env.TOKEN);
