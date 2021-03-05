module.exports = {
	exec: ({ client, message }) => {
		message.channel.send({
			embed: {
				color: 'green',
				author: { name: "Page d'aide", icon_url: client.user.displayAvatarURL() },
				description: client.commands.map((cmd) => `\`${cmd.config.name}\``).join(' ')
			}
		})
	},
	config: { name: 'help', aliases: ['h'] }
}
