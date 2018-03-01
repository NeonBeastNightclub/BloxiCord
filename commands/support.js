exports.run = (Discord, client, message, args) => {
    
    if (message.channel.id === '416284519453163521') {
        let help = message.author
        message.reply(" we are contacting staff. Please wait a moment. :telephone_receiver:")
        let staffc = message.guild.channels.find("name", "support-staff")
        staffc.sendMessage(`<@&416285748942077963>, ${message.author.username} needs help in <#416284519453163521>!`)
        return;
    } else {
        message.reply("Unfortunately this can only be done in our customer support channel. To join our server run `~join` or `~info`!")
        return;
    };



}