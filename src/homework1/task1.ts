import { createInterface } from 'readline'

createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
})
.on('line', (line) => {
    console.log(line.split('').reverse().join(''))
})
