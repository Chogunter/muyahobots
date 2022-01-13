const Discord = require("discord.js")
const dotenv = require("dotenv");
dotenv.config();

const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("messageCreate", msg => {
  if (msg.content === "무") {
    msg.reply("야호!")
  }
})

client.login(process.env.TOKEN);