class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this
        } else {
            let temp = this.root;
            while(true) {
                if(value === temp.value) {
                    return undefined
                }

                if(value < temp.value) {
                    if(temp.left === null) {
                        temp.left = newNode;
                        return this
                    } else {
                        temp = temp.left;
                    }
                } else {
                    if(temp.right === null) {
                        temp.right = newNode;
                        return this
                    } else {
                        temp = temp.right;
                    }
                }
            }
        }
    }

    //includes method
    includes(value) {
        if(!this.root) return false;

        let temp = this.root;
        while(temp) {
            if(value === temp.value) return true;
            else if(value < temp.value) temp = temp.left;
            else temp = temp.right;
        }
        return false;
    }
}

const tree = new BST();
tree.insert(5);
tree.insert(3);
tree.insert(8);
tree.insert(7);
tree.insert(9);
tree.insert(1);
tree.insert(4);

console.log(tree.includes(10));

console.log(tree)