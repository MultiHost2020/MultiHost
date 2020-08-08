const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {


    var botEmbed = new discord.MessageEmbed()
    .setTitle("Website")
    .setDescription("Laat de link van de website zien")
    .setColor("#009dff")
    .addField("De website is op dit moment in aanbouw", "Voor hulp maak een ticket aan")
    .setFooter("!website")

    return message.channel.send(botEmbed)


}

module.exports.help = {
    name: "website"
}