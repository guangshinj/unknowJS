const now = Date.now()
while (Date.now() - now > 5000) { }
console.info('game over!')
throw 'error.js throw'
