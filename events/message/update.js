const { writeFileSync, existsSync } = require('fs')

module.exports = {
	user_exp: async ({ message }) => {
		const userID = message.author.id
		const data = existsSync(`./_database/users/exp/${userID}.json`) ? require(`../../_database/users/exp/${userID}.json`) : { level: 0, exp: 0 }
		const random_exp = Math.floor(Math.random() * 20) + 5
		const exp_max = data.level == 0 ? 100 : 100 * (data.level / 10 + 1)

		if (data.exp + random_exp >= exp_max) {
			data.exp = 0
			data.level++
			await message.channel.send(`Bien joué ${message.member} ! Tu passes level **${data.level}**`)
		} else {
			data.exp += random_exp
		}

		writeFileSync(`./_database/users/exp/${userID}.json`, JSON.stringify(data))
	}
}
