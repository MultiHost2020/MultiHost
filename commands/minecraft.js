const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    
    var botEmbed = new discord.MessageEmbed()
    .setTitle("Minecraft server prijzen")
    .setDescription("Laat de prijzen van de minecraft servers zien")
    .setColor("#d1ad0d")
    .addField("1000mb (bungeecord)", "€2,50")
    .addField("2000mb", "€4,00")
    .addField("2200mb", "€4,00")
    .addField("3000mb", "€6,00")
    .addField("4000mb", "€8,00")
    .addField("Tijd", "Prijzen gaan per maand")
    .setFooter("More mb? Contact us!")

    return message.channel.send(botEmbed)

}

module.exports.help = {
    name: "minecraft"
}