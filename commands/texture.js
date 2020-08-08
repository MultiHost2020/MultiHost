const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setTitle("Texturepack Prijzen")
    .setDescription("De prijzen van de texturepacks")
    .setColor("#00eeff")
    .addField("20 blocks 1 cart", "€0,50")
    .addField("40 blocks", "€0,90")
    .addField("40 blocks 5 carts", "€1,50")
    .setFooter("Prijzen gaan per maand")

    return message.channel.send(botEmbed)

}

module.exports.help = {
    name: "texture"
}