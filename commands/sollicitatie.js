const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setTitle("Sollicitatie's")
    .setDescription("Openstaande Vacatures")
    .setColor("#15ba0f")
    .addField("Bot Developer", "Ben jij goed in coderen van bots en vind je het leuk? Solliciteer dan nu met een #《🎫》support-ticket")

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "sollicitatie"
}