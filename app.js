const { Client } = require('discord.js')
const { existsSync, readdirSync } = require('fs')

const client = new Client()
module.exports = client

client.commands = readdirSync('./events/message/commands/').filter((file) => file.endsWith('.js')).map((file) => require(`./events/message/commands/${file}`))

readdirSync('./events').forEach((dir) => existsSync(`./events/${dir}/index.js`) && client.on(dir, require(`./events/${dir}/index.js`)))

client.login(require('./config.json').token)
