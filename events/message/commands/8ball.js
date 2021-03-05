const arr = ['oui', 'non', 'peut-être']

module.exports = {
	exec: ({ message, args }) => {
		const question = args.join(' ')
		if (!question || question.length < 10) return message.reply('la question doit être supérieur à 10 caractères.')
		message.channel.send(arr[Math.floor(Math.random() * arr.length)])
	},
	config: { name: '8ball', aliases: [] }
}
