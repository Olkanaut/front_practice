const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'testga'), err => {//callback function // mkdirSync - блокирует поток
	// if (err)
		// throw err
	// console.log('folder created')
// })

const filePath = path.join(__dirname, 'test', 'text.txt')
fs.writeFile(filePath, 'content', err => {
	if (err)
		throw err
	console.log('file created')
})

fs.appendFile(filePath, '\nextra content', err => {
	if (err)
		throw err
	console.log('file created')
})

// fs.readFile(filePath, (err, content) => {
// 	if (err){
// 		throw err
// 	}
// 	const data = Buffer.from(content)
// 	console.log('reading content:\n', content)
// 	console.log('reading content:\n', data.toString())

fs.readFile(filePath, 'utf-8', (err, content) => {
	if (err){
		throw err
	}
	console.log('ыаыв reading content:\n', content)
})