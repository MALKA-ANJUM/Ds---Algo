console.log("hash table");

class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size)
    }
    _hash(key) {
        let hash = 0
        for(let i=0; i<key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
        }
        return hash
    }
    set(key, value) {
        let index = this._hash(key)
        if(!this.dataMap[index]) {
            this.dataMap[index] = []
        }
        this.dataMap[index].push([key, value])
        return this
    }
    get(key) {
        let index = this._hash(key)
        if(this.dataMap[index]) {
            for(let i=0; i<this.dataMap[index].length; i++) {
                if(this.dataMap[index][i][0] === key) {
                    return this.dataMap[index][i][1]
                }
            }
        }
        return undefined
    }
    key() {
        let allKeys = []
        for(let i=0; i<this.dataMap.length; i++) {
            if(this.dataMap[i]) {
                for(let j=0; j<this.dataMap[i].length; j++) {
                    allKeys.push(this.dataMap[i][j][0])
                }
            }
        }
        return allKeys
    }
}


let myHashTable = new HashTable()
myHashTable.set('malka', 899)
myHashTable.set('anjum', 64)


/// big O of hash tables
// hash method is O(1)
// push is a O(1)
// get is O(1) and might be O(n) if there is more than one item at a particular index
// finding something by key and value pair is an O(1)

// function itemInCommon(arr1, arr2) {
//     for(let i=0; i<arr1.length; i++) {
//         for(let j=0; j<arr2.length; j++) {
//             if(arr1[i] === arr2[j]) {
//                 return true
//             }
//         }
//     }
//     return false
// }

function itemInCommon(arr1, arr2) {
    let obj = {}
    for(let i=0; i<arr1.length; i++) {
        obj[arr1[i]] = true
    }
    for(let j=0; j<arr2.length; j++) {
        if(obj[arr2[j]]) {
            return true
        }
    }
    return false
}

let array1 = [1,3,5]
let array2 = [2,4,5]

