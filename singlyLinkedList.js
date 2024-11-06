class Node {
    constructor (value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor () {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(value) {
        let newNode = new Node(value)

        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

        this.length++

    }

    pop() {
        if(this.length > 0) {
            let temp = this.head
            let prev = null
            while(temp.next) {
                prev = temp
                temp = temp.next
            }
            if(prev) {
                prev.next = null
                this.tail = prev
            } else {
                this.head = null
                this.tail = null
            }
            this.length--
        }
    }

    unshift(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
    }

    shift() {
        if(this.length > 0) {
            let temp = this.head
            if(temp.next) {
                this.head = temp.next
                temp = null
            } else {
                this.head = null
                this.tail = null
            }
            this.length--
        }
    }

    getFirstValue() {
        return this.head.value
    }

    getLastValue() {
        return this.tail.value
    }

    getNode(index) {
        if(index >= this.length) {
            return undefined
        } else {
            let c = 0;
            let temp = this.head
            while(c !== index) {
                temp = temp.next
                c++
            }
            return temp
        }
    }

    getByIndex(index) {
        let temp = this.getNode(index)
        if(temp) {
            return temp.value
        } else return undefined
    }

    set(index, value) {
        let temp = this.getNode(index)
        if(temp) {
            temp.value = value
        }
    }

    insertAt(index, value) {
        if(index > 0 && index < this.length - 1) {
            let temp = this.getNode(index)
            let newNode = new Node(value)
            if(temp) {
                newNode.next = temp.next
                temp.next = newNode
            }
            this.length++
        } else if(index === 0) {
            this.unshift(value)
        } else if(index === this.length - 1){
            this.push(value)
        }
    }

    size() {
        return this.length
    }

    clear() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    display() {
        if(this.length > 0) {
            let temp = this.head
            let list = ""
            while(temp) {
                list += temp.value + " -> "
                temp = temp.next
            }
            console.log(list + null)
        }
    }
}

const list = new LinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.display()
list.pop()
list.unshift(3)
list.display()
list.shift()
list.display()
console.log(list)
console.log("First value: " + list.getFirstValue())
console.log("Last value: " + list.getLastValue())
console.log(list.getByIndex(2))
list.set(2, 10)
list.insertAt(2,11)
list.insertAt(1,100)
console.log(list.size())
//list.clear()
console.log(list)
list.display()