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
            const temp = this.first
            if(this.length === 1){
                this.first = null;
            } else {
                this.first = this.first.next
                temp.next = null
            }
            this.length--
            return temp
        }
    }

    top() {
        if(this.length) {
            return this.first.value
        }
    }

    min() {
        if(this.length) {
            let temp = this.first
            let minValue = temp.value

            while(temp) {
                if(minValue > temp.value) {
                    minValue = temp.value
                }
                temp = temp.next
            }

            return minValue
        }
    }
}


const myStack = new Stack()

myStack.push(1)
myStack.push(2)

//console.log(myStack.pop())

console.log("Top value is: ",myStack.top())
console.log("Minimum value is: ", myStack.min())

console.log(myStack)