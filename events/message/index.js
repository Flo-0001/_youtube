const { prefix } = require('../../config.json')
const client = require('../../app.js')
const update = require('./update.js')

client.cooldowns = {}

module.exports = (message) => {
	if (!message.content || message.author.bot || message.channel.type == 'dm') return
	if (client.cooldowns[message.member.id] && client.cooldowns[message.member.id] > Date.now()) return
	client.cooldowns[message.member.id] = Date.now() + 2000

	update.user_exp({ message })

	if (!message.content.startsWith(prefix)) return
	const [command, ...args] = message.content.toLowerCase().slice(prefix.length).split(/\s+/)
	const toExport = client.commands.find((cmd) => [cmd.config.name, ...cmd.config.aliases].includes(command))
	if (toExport) return toExport.exec({ client, message, prefix, command, args })
}
