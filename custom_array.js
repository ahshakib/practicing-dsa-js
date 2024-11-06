class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }
    push(value) {
        return this.data[this.length++] = value
    }
    get(index) {
        return this.data[index]
    }
    pop() {
        delete this.data[this.length - 1]
        return this.length--
    }
    shift() {
        if(this.length > 0) {
            for(let i = 0; i < this.length - 1; i++) {
                this.data[i] = this.data[i+1]
            }
            delete this.data[this.length - 1]
            return this.length--
        }
    }
    deleteByIndex (index) {
        if(index >= 0 && index < this.length) {
            for(let i = index; i < this.length - 1; i++) {
                this.data[i] = this.data[i+1]
            }
            delete this.data[this.length - 1]
            return this.length--
        }
    }
}

const myArr = new MyArray()
myArr.push(1)
myArr.push(2)
myArr.push(3)
//myArr.pop()
//myArr.shift()
myArr.deleteByIndex(0)
console.log(myArr.data)
console.log(myArr.length)
console.log(myArr.get(0))

