const client = require('../../app.js')

module.exports = () => console.log(`${client.user.username} is ready !\n${client.commands.length} commands loaded.`)
