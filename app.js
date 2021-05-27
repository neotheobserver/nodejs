/*const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to my page')
    }
    if(req.url==='/about'){
        res.end('Let me check this again')
    }
    res.end(`<h1>This is the real deal</h1>`)
})

server.listen(5000)*/
//package .js using npm init iy
const _ = require('lodash')

const items=[1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items)
console.log(newItems)
console.log("alright this is it")