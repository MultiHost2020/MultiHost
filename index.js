const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const active = new Map();

const client = new discord.Client();
client.commands = new discord.Collection();

client.login(process.env.token);


fs.readdir("./commands/", (err, files) => {

  if (err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Can't find the commands map!");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} was loaded!`);
    client.commands.set(props.help.name, props);
  });
});


client.on("ready", async () => {

  console.log(`${client.user.username} is online.`);

  client.user.setActivity("Do not use!", { type: "PLAYING" });

});


client.on("message", async message => {

  if (message.author.bot) return;

  if (message.channel.type === "dm") return;

  var prefix = botConfig.prefix;

  if (message.content.charAt(0) != prefix) {
    return;
  }

  var messageArray = message.content.split(" ");

  var command = messageArray[0];

  let args = messageArray.slice(1);

  let commandfile = client.commands.get(command.slice(prefix.length));

  var options = {

    active: active

  }

  if (commandfile) commandfile.run(client, message, args, options);

});

client.on("guildMemberAdd", member => {

  var role = member.guild.roles.cache.get(`733038110354440253`);

  if (!role) return;

  member.roles.add(role);

  var channel = member.guilds.channels.cache(`733040351585239121`);

  if (!channel) return;

  channel.send(`Welcome op my server ${member}!`)


})