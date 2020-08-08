const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {


    var botEmbed = new discord.MessageEmbed()
    .setTitle("Discord bot prijzen")
    .setDescription("De prijzen van de discord bots")
    .setColor("#00eeff")
    .addField("Standard", "€0,50")
    .addField("Pro", "€1,00")
    .addField("Ultra", "€3,00")
    .setFooter("Prijzen per maand")
    
    return message.channel.send(botEmbed)


}

module.exports.help = {
    name: "discord"
}