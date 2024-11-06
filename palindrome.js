function palindrome (str) {
    return str === str.split("").reverse().join("")
}

const str = 121

console.log(palindrome(str.toString()))