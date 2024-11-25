// Reverse string using stack

function reverseString(str) {
    let stack = []
    for(let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    let revStr = ''
    for(let i = 0; i < str.length; i++) {
        revStr += stack.pop();
    }
    return revStr;
}

console.log(reverseString("Hello world"));