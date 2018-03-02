exports.run = (Discord, client, message, args) => {

if(message.author.id !== "255048840615428107") return;

let guildList = client.guilds;
try {
    guildList.forEach((g) => {
        let firstChannel = g.channels.filter(c => c.type === "text").first();
        firstChannel.send(args);
    });
} catch(err) {
    console.log("Unable to broadcast message.");
}

}
