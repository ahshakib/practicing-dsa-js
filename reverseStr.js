const str = "Shakib"
let str1 = ""

for(let i = str.length - 1; i >= 0; i--) {
    str1 += str[i]
}

console.log(str1)

console.log(str.split("").reverse().join(""))