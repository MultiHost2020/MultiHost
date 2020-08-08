const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setTitle("Website Prijzen")
    .setDescription("De prijzen van een website")
    .setColor("#009dff")
    .addField("Standard", "€6,00")
    .addField("Pro", "€10,00")
    .addField("Ultra", "€15,00")

    return message.channel.send(botEmbed)


}

module.exports.help = {
    name: "pricewebsite"
}