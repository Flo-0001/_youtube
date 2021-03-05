module.exports = (member) => {
	if (member.guild.id != '721361625747030027' || member.user.bot) return

	member.roles.add('775112705605369856').catch(() => 0)

	member.guild.channels.cache.get('721361626208403459').send({
		embed: {
			color: '#666fff',
			description: `${member} est entré sur le serveur !`
		}
	})
}
