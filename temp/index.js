const http = require('http')
const fs = require('fs')
const path = require('path')
const { EDESTADDRREQ } = require('constants')

const server = http.createServer( (req, res) => {
	res.writeHead(200, {
		'Content-Type': 'text/html'
	})
	console.log(req.url)
	// let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
	let filePath = path.join(__dirname, 'tennis', req.url === '/' ? 'tennis.html' : req.url)

	const ext = path.extname(filePath)
	let contentType = 'text/html'

	switch (ext){
		case '.css':
			contentType = 'text/css'
			break
		case '.js':
			contentType = 'text/javascript'
			break
		default:
			contentType = 'text/html'
	}
	if (!ext)
		filePath += '.html'
	console.log(filePath)
	fs.readFile(filePath, (err, content) => {
		if (err){
			fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
				if (err){
					res.writeHead(500)
					res.end()
				} else {
					res.writeHead(200, {
						'Content-Type': 'text/html'
					})
					res.end(data)
				}
			})
		} else {
			res.writeHead(200, {
				'Content-Type': contentType
			})
			res.end(content)
		}
	})
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
	console.log(`server has been started on ${PORT}`)
})
