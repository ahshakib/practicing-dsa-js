class HashTable {
    constructor(size = 5) {
        this.keyMap = new Array(size);
    }
    
    _hash(key) {
        let hash = 0;
        const PRIME = 31;
        key = key.toLowerCase();
        for(let i = 0; i < Math.min(key.length, 100); i++) {
            const charCode = key.charCodeAt(i) - 97;
            hash = (hash * PRIME + charCode) %this.keyMap.length
        }
        return hash
    }

    set(key, value) {
        const index = this._hash(key);
        if(!this.keyMap[index]) this.keyMap[index] = [];
        this.keyMap[index].push([key, value]);
        console.log(this)
    }

    get(key) {
        const index = this._hash(key);
        if(this.keyMap[index]) {
            for(let i = 0; i < this.keyMap[index].length; i++) {
                if(this.keyMap[index][i][0] === key) return this.keyMap[index][i][1]
            }
        } else undefined
    }

    getAllKeys() {
        const keys = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; j < this.keyMap[i].length; j++) {
                    keys.push(this.keyMap[i][j][0]);
                }
            }
        }
        return keys;
    }

    getAllValues() {
        const values = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; j < this.keyMap[i].length; j++) {
                    values.push(this.keyMap[i][j][1]);
                }
            }
        }
        return values;
    }
}

const hashTable = new HashTable();
hashTable.set('Shakib', 45);
hashTable.set('Sakib', 45);
console.log(hashTable.get('Shakib'))
console.log(hashTable.getAllKeys())
console.log(hashTable.getAllValues())