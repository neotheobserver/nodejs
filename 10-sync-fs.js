const {readFileSync,writeFileSync}=require('fs')
console.log('start');
const first=readFileSync('./content/first.txt','utf8')
const second=readFileSync('./content/second.txt','utf8')

console.log(first,second)

writeFileSync('./content/result-sync.txt',`Let me just check this: ${first},${second}`,{flag:'a'})

console.log('donw eith this task')
console.log('starting the next one')