class Node {
    constructor (value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor () {
        this.front = null
        this.rare = null
        this.length = 0
    }

    enqueue (value) {
        const newNode = new Node(value)

        if(this.length === 0) {
            this.front = newNode
            this.rare = newNode
        } else {
            this.rare.next = newNode
            this.rare = newNode
        }
        this.length++
    }

    dequeue () {
        if(this.length) {
            const temp = this.front
            if(this.length === 1) {
                this.front = null
                this.rare = null
            } else {
                this.front = this.front.next
                temp.next = null
            }
            this.length--
        }
    }
}


const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)

queue.dequeue()

console.log(queue)