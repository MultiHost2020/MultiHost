const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setTitle("Info")
    .setDescription("Info Commando")
    .setColor("#ff0d00")
    .addField("Wat hosten wij", "Minecraft Servers en Discord Bots")
    .addField("Kosten", "ga naar #《💰》prices")
    .addField("Wanneer gaan wij open?", "Nog niet zeker")
    .addField("Website", "In Aanbouw")

return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "info"
}