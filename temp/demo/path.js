const path = require('path')//not neccessary
console.log('file name: ', path.basename(__filename))
console.log('dire name: ', path.basename(__dirname))
console.log('dire name: ', path.dirname(__dirname))
console.log('exte name: ', path.extname(__filename))
console.log('parse: ',path.parse(__filename))
console.log('parse detail: ', path.parse(__filename).dir)
console.log('joined: ', path.join(__dirname, 'server', 'index.html'))