const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({ intents: GatewayIntentBits.Guilds });
const { token } = require("./config.json");

client.once("ready", () => {
    console.log("Oh, hey!");
});

client.login(token);