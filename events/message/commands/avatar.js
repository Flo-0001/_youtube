module.exports = {
	exec: ({ message, args }) => {
		const member = message.guild.members.cache.get(args[0] && args[0].replace(/\D+/g, '')) || message.member
		message.channel.send({ embed: { color: 'blue', image: { url: member.user.displayAvatarURL({ size: 2048, format: 'png', dynamic: true }) } } })
	},
	config: { name: 'avatar', aliases: ['pp'] }
}
