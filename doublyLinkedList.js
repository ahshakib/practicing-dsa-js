class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(value) {
        const newNode = new Node(value)

        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
    }

    pop() {
        if(this.length) {
            let temp = this.tail
            if(this.length === 1) this.head = this.tail = null
            else {
                this.tail = this.tail.prev
                this.tail.next = null
            }
            this.length--
            temp.prev = null
            return temp.value
        }
    }

    unshift(value) {
        const newNode = new Node(value)

        if(!this.head) this.head = this.tail = newNode
        else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++
    }

    shift() {
        if(this.length) {
            let temp = this.head
            if(this.length === 1) {
                this.head = this.tail = null
            } else {
                this.head = this.head.next
                this.head.prev = null
                temp.next = null
            }
            this.length--
            return temp
        }
    }

    reverse() {
        if(this.length) {
            let temp = this.head
            this.head = this.tail
            this.tail = temp

            let temp1 = this.head
            while(temp1) {
                let temp2 = temp1.next
                temp1.next = temp1.prev
                temp1.prev = temp2
                temp1 = temp1.next
            }
        }
    }

    display() {
        if(this.length) {
            let temp = this.head
            let str = ''
            while(temp) {
                str += temp.value + ' <-> '
                temp = temp.next
            }
            console.log(this.head.prev + " " + str + this.tail.next)
        }
    }
}

const list = new DoublyLinkedList()

list.push(1)
list.push(2)
list.push(3)

// list.pop()
// list.pop()

list.unshift(10)

list.shift()

console.log(list)
list.reverse()
console.log(list)
list.display()
