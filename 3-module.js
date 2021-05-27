//GLOBALS - no window!!!

//_dirname==path to current directory
//__filename==file name
//require==function to use module
//module==info about current module
//process==info about env where the program is being executed

//console.log(module);
/*setInterval(()=>{
    console.log('Hello word')},1000)*/

//MODULES IN NODE==incapsulated code(only share minimum)
const names = require('./4-name')
const sayHi = require('./5-utils')
const data = require('./7-alternative')
require('./6-mind-grenade')
sayHi(names.me)
sayHi(names.dad)

