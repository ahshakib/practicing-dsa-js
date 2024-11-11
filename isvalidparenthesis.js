//isValidParenthesis leetcode problem solving with stack
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.length = 0
    }

    push(value) {
        const newNode = new Node(value)
        if(!this.first) {
            this.first = newNode
        } else {
            newNode.next = this.first
            this.first = newNode
        }
        this.length++
    }

    pop() {
        if(this.length) {
            if(this.length === 1) {
                this.first = null
            } else {
                this.first = this.first.next
            }
            this.length--
        }
    }

    top() {
        return this.first.value
    }

    empty() {
        return this.length === 0
    }
}

function isValidParenthesis (str) {
    const stack = new Stack()
    for(let i = 0; i < str.length; i++) {
        if(str[i] === '(' || str[i] === '{' || str[i] === '[') {
            stack.push(str[i])
        } else {
            if(stack.empty()) {
                return false
            }
            if((str[i] === ')' && stack.top() !== '(') || (str[i] === '}' && stack.top() !== '{') || (str[i] === ']' && stack.top() !== '[')) {
                return false
            }
            stack.pop()
        }
    }
    return stack.empty()
}

console.log(isValidParenthesis("()"))
console.log(isValidParenthesis("(){}[]"))
console.log(isValidParenthesis("({]})"))