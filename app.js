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
  https://github.com/iTrxpical/BloxiCord/pulls
   switch (args[0].toLowerCase()) {
  
  case "help":
  message.author.sendMessage("Hello there! ");
  break;
  
  case "support":
let help = message.author
message.reply(" we are contacting staff. Please wait a moment.")
let staffc =  message.guild.channels.find("name", "support-staff")
staffc.sendMessage(`<@&416285748942077963>, ${message.author.username} needs help in <#416284519453163521>!`)
break ;
           
  case "info":
           message.reply("check your DMs!");
  var embedinfo = new Discord.RichEmbed()
.setFooter("© BloxiCord | Owned by The Bot Company & predator.co!")
.setColor("0x7DCEA0")
.setTitle("📖 BloxiCord Information")
.setDescription("For other inquiries that this information doesn't cover, use `~help`.")
.addField(":iphone: What is BloxiCord?", "BloxiCord is a discord bot that is used to replace lots of bots. There are many features, from linking ROBLOX accounts to discord through to administration. If you want to see a full list of our commands please run `~cmds`!")
.addField(":pencil2: How do I use BloxiCord?", "BloxiCord is designed to be a simple, fast and easy solution to all the bots that are found in a regular discord server. More than 90% of the people we asked had over 3 bots that did different things in their server, we are coming in to try and lower that in an even more simpler fasion. If our `~cmds` and `~help` commands didn't help, join our official discord server down below. We have an active support team waiting to help you!")
.addField(":telephone_receiver: Support?", "Struggling with BloxiCord? Found a bug? Have a suggestion of a feature you want us to add? Feel free to join our discord offical server (link below)! If you do require help simply head to the support channel and run the `~support` command!")
.addField(":moneybag: How much does it cost?", "The regular bot is free! When we release the paid version, it will have more functions but BloxiCord will always be free.")
.addField(":inbox_tray: BloxiCord Bot Invite", "**Click this button for an invite link:** [<:radio_button:382568980218511361>](https://discordapp.com/oauth2/authorize?client_id=414823685770444801&scope=bot&permissions=502627454)")
.addField(":pushpin: Official Server", "https://discord.gg/WxUPp3P")
.addField(":closed_book: Our Website", "**COMING SOON**")
message.author.sendEmbed(embedinfo);
  break;
           
  defult:
  message.channel.sendMessage(" :no_entry:  That command is invalied. The prefix is **~**. For a list of valid commands do **~cmds!**");
    } 
})

       case "purge":
           // We have to wrap this in an async since awaits only work in them.
        async function purge() {
            message.delete(); // Let's delete the command message, so it doesn't interfere with the messages we are going to delete.

            // Now, we want to check if the user has the `bot-commander` role, you can change this to whatever you want.
            if (!message.member.roles.find("name", "bot-commander")) { // This checks to see if they DONT have it, the "!" inverts the true/false
                message.channel.send('You need the \`bot-commander\` role to use this command. If your server does not have this command, ask the server host to make one or run the command `~setup`.'); // This tells the user in chat that they need the role.
                return; // this returns the code, so the rest doesn't run.
            }

            // We want to check if the argument is a number
            if (isNaN(args[0])) {
                // Sends a message to the channel.
                message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'purge <amount>'); //\n means new line.
                // Cancels out of the script, so the rest doesn't run.
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]}); // This grabs the last number(args) of messages in the channel.
            console.log(fetched.size + ' messages found, deleting...'); // Lets post into console how many messages we are deleting

            // Deleting the messages
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`)); // If it finds an error, it posts it into the channel.

        }

        // We want to make sure we call the function whenever the purge command is run.
        purge(); // Make sure this is inside the if(msg.startsWith)

    }
});

client.login(process.env.TOKEN);
