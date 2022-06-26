
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
// how to add a number if there is no item in the list using linkedlist
class pushNoValue {
    // constructor(value) {
    //     const newNode = new Node(value)
    //     this.head = newNode
    //     this.tail = newNode
    //     this.length = 1
    // }
    push(value) {
        const newNode = new Node(value)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
}
const myPushNoValue = new pushNoValue(3)
console.log(myPushNoValue.push(5));

// how to add a number is there exist already a list or few of them usin linkedlist
class pushWithValue {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }
    push(value) {
        const newNode = new Node(value)
        if(this.head) {
            this.tail = newNode
            this.tail.next = newNode
        }
        this.length++
        return this
    }
}
const myPushWithValue = new pushWithValue(5)
console.log(myPushWithValue.push(14));



//how to remove an item using linkedlist when there is no item in the list
class popAsNull {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }
    pop() {
        if(this.length === 0){
            return undefined
        }
    }
}
const myPopAsNull = new popAsNull(45)
console.log(myPopAsNull.pop());

//how to remove an item using linkedlist when there is only one item in the list
class popWithOneValue {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }
    pop() {
        if(this.length === 1){
            this.length--
            this.tail = null
            this.head = null
        }
        return this
    }
}
const myPopWithOneValue = new popWithOneValue(56)
console.log(myPopWithOneValue);

//how to remove an item using linkedlist when there is more than one item in the list
class popWithMoreValue {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }
    push(value) {
        const newNode = new Node(value)
        if(this.head) {
            this.tail = newNode
            this.tail.next = newNode
        }
    this.length++
    return this
    }
    pop() {
        let temp = this.head
        let prev = this.head
        if(this.head){
            while(temp.next){
                prev = temp
                temp = temp.next
            }
            this.tail = prev
            this.tail.next = null
            this.length--
        }
        return temp
    }
}
const myPopWithMoreValue = new popWithMoreValue(44)
console.log(myPopWithMoreValue.push(99));
console.log(myPopWithMoreValue.push(39));
console.log(myPopWithMoreValue.push(93339));

// how to add an item at the beginning of a linked list if the list is empty
class UnshiftWhenNoValue {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }
    unshift(value) {
        const newNode = new Node(value)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
}
const myUnshiftWhenNoValue = new UnshiftWhenNoValue(33)
console.log(myUnshiftWhenNoValue.unshift(22));

//how to add in the first position in a linked list

class AddingAtFirst {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }
    unshift(value) {
        const newNode = new Node(value)
        if(this.head) {
            this.head = newNode
            newNode.next = this.head
        }
        this.length++
        return this
    }
}
const myAddingAtFirst = new AddingAtFirst(11)
console.log(myAddingAtFirst.unshift(24));

// how to remove the first item of a linked list

class RemovingFromFirst {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }
    push(value) {
        const newNode = new Node(value)
        if(this.head) {
            this.tail = newNode
            this.tail.next = newNode
        }
    this.length++
    return this
    }
    shift() {
        let temp = this.head
        let prev = this.head
        while(temp.next){
            prev = temp
            temp = temp.next
        }
        this.head = temp
        this.head.prev = null
        this.length--
        return prev
    }
    
}
const myRemovingFromFirst = new RemovingFromFirst(22)
myRemovingFromFirst.push(66)
myRemovingFromFirst.push(43)
console.log(myRemovingFromFirst.shift());

// how to remove the first item of a linked list if the linked list has only one item

class RemoveIfOnlyOneItem {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }
    shift() {
       this.length--
       this.tail= null
       this.head = null 
       return this
    }
}
const myRemoveIfOnlyOneItem = new RemoveIfOnlyOneItem(11)
console.log(myRemoveIfOnlyOneItem.shift());

//how to get an item of the list

class getAnItem {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }
    push(value) {
        const newNode = new Node(value)
        if(this.head) {
            this.tail = newNode
            this.tail.next = newNode
        }
    this.length++
    return this
    }
    get(index) {
        let temp = this.head
        for(let i=0; i < index; i++){
            temp = temp.next
        }
        return temp
    }
}
const mygetAnItem = new getAnItem(2)
mygetAnItem.push(4)
mygetAnItem.push(5)
mygetAnItem.push(7)
console.log(mygetAnItem.get(2));

class LinkedList {
    constructor (value) {
        this.head = null
        this.tail = null
    }
}

class LinkedList {
    constructor (value) {
        this.head = null
        this.tail = null
    }
}
const myLinkedList = new LinkedList()


class Node {
    constructor(value) {
        this.value = value 
        this.next = null
    }
}
class LinkedListWithValue {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }
}
const myLinkedListWithValue = new LinkedListWithValue(22)


class LLpush {
    constructor (value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }
    push(value) {
        const newNode = new Node(value)
        if(this.head){
            this.head.next = this.tail
            this.tail = newNode
            this.tail.next = null  
        }
        this.length++
    }
}
const myLLpush = new LLpush(44)

// if the list is empty
class LLpop {
    constructor(value) {
        this.head = null
        this.tail = null
    }
    pop() {
        if(!this.head) {
            return undefined
        }
    }
}
const myLLpop = new LLpop()

// if the list has only one item
class PopWithOne {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }
    
    pop() {
        if(this.length === 1) {
            this.length--
            this.head = null 
            this.tail = null
        }
    }
}
const myPopWithOne = new PopWithOne(23)


// if the list has many item
class PopWithMany {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }
    push(value) {
                const newNode = new Node(value)
                if(this.head){
                    this.head.next = this.tail
                    this.tail = newNode
                    this.tail.next = null  
                }
                this.length++
            }
    pop() {
        let temp = this.tail
        if(this.length > 1) {
            
            this.tail.next = null
            temp.next = this.tail


        }
        this.length--
        return temp
    }
}
const myPopWithMany = new PopWithMany(23)