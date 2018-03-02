exports.run = (Discord, client, message, args) => {

if (!message.author.id === '255048840615428107') return;

    var guildList = client.channel.first.array();
try {
    guildList.forEach(guild => guild.defaultChannel.send(args));
} catch (err) {
    console.log("Could not send message to " + guild.name);
}

}
