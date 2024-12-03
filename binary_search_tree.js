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

    // tree traversal using bfs
    bfs() {
        if(!this.root) return null;
        let queue = [];
        let data = [];
        let current = this.root;
        queue.push(current);
        while(queue.length) {
            current = queue.shift();
            data.push(current.value);
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
        return data;
    }

    // tree traversal using dfs(preorder)
    dfsPreorder(node = this.root, data = []) {
        if(node === null) return data;
        data.push(node.value);
        if(node.left) this.dfsPreorder(node.left, data);
        if(node.right) this.dfsPreorder(node.right, data);

        return data;
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
console.log(tree.bfs())
console.log(tree.dfsPreorder())
console.log(tree)