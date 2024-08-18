
const http = require('http')

const server = http.createServer((req,res) =>{
    if(req.url == '/hello'){
        res.end("Hello World !")
    } else {
        res.end("you are trying to hit wrong url")
    }
})

server.listen(8000, () => {
    console.log("Server is started")
})