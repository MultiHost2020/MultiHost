const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setTitle("Commands")
    .setDescription("Hier zie je alle commands")
    .setColor("#530fba")
    .addField("!sollicitatie", "Laat de sollicitatie's zien")
    .addField("!info", "Info command")
    .addField("!help", "Laat commands Zien")
    .addField("!website", "Laat de link van de website zien")

    return message.channel.send(botEmbed);


}

module.exports.help = {
    name: "help"
}