class LinkedListNode
{
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

class LinkedList
{
    constructor() {
        this.head = null
        this.length = 0
        this.tail = this.head
    }

    append(value) {
        if (this.head == null) {
            this.head = new LinkedListNode(value)
            this.tail = this.head
            this.length = 1
            return this
        }

        this.tail.next = new LinkedListNode(value)
        this.tail = this.tail.next
        this.length = this.length + 1
        return this
    }

    prepend(value) {
        if (this.head == null) {
            this.head = new LinkedListNode(value)
            this.tail = this.head
            this.length = 1
            return this
        }

        let newNode = new LinkedListNode(value, this.head)
        this.head = newNode
        this.length = this.length + 1
        return this
    }

    insert(index, value) {
        if (this.head == null) {
            this.prepend(value)
            return this
        }

        if (index >= this.length) {
            this.append(value)
            return this
        }

        let counter = index - 1
        let tmpPointer = this.head
        while (counter > 0) {
            tmpPointer = tmpPointer.next
            counter--
        } 

        let newNode = new LinkedListNode(value)
        newNode.next = tmpPointer.next
        tmpPointer.next = newNode
        this.length = this.length + 1
    }

    remove(index) {
        if (index >= this.length) {
            return null;
        }

        let counter = index - 1
        let tmpPointer = this.head
        while (counter > 0) {
            tmpPointer = tmpPointer.next
            counter--
        }

        if (tmpPointer.next) {
            tmpPointer.next = tmpPointer.next.next
            this.length = this.length - 1
        }

        return this
    }

    reverseIterative() {
        let previousNode = null, nextNode = this.head
        while (nextNode.next != null) {
            let currentNode = nextNode.next
            nextNode.next = previousNode
            previousNode = nextNode
            nextNode = currentNode
        }
        nextNode.next = previousNode
        this.head = nextNode

        return this
    }

    //DRAFT
    getReverseNode() {
        if (this.head.next == null) {
            return this.head
        }

        let currentNode = this.head
        this.head = this.head.next
        let nextNode = this.getReverseNode()
        nextNode.next = currentNode
    }

    //DRAFT
    reverseRecursive() {
        if (this.head == null) {
            return this
        }

        const reverseNode = this.getReverseNode();
        reverseNode.tail.next = null
        // if (this.head.next == )
        // if (currentNode.next)
        // let currentNode = this.head
        // if (currentNode.next == null) {
            // return {
                // tree: this,
                // head: this.head,
                // tail: currentNode
            // }
        // }

        // this.head = this.head.next
        // let nextNode = this.reverseRecursive()
        // nextNode.tail.next = currentNode
        // const res = {
            // head: null,
            // tail: this.head
        // }
        // this.head = this.head.next
        // this.he/ad.next = this.reverseRecursive().tail

        return res
    }

    printIterative() {
        let tmpPointer = this.head
        let res = []
        while (tmpPointer != null) {
            res.push(tmpPointer.value)
            tmpPointer = tmpPointer.next
        }

        return res
    }

    printRecursive() {
        if (this.head == null) {
            return []
        }

        let tmpPointer = this.head

        this.head = this.head.next
        let res = [this.head.value].concat(this.printRecursive())

        this.head = tmpPointer
        return res
    }

    printReverseRecursive() {
        if (this.head == null) {
            return []
        }

        let tmpPointer = this.head

        this.head = this.head.next
        let res = this.printReverseRecursive().concat([tmpPointer.value])

        this.head = tmpPointer
        return res
    }
}

let ll = new LinkedList()
ll.append(0)
ll.append(1)
ll.append(2)
ll.append(3)
ll.append(4)

console.log(ll.printRecursive())
console.log(ll.reverseIterative().printIterative())
// console.log(ll.reverseIterative().printIterative())
// console.log(ll.printReverseRecursive())
// console.log(ll.printRecursive())
// console.log(ll.reverseRecursive())
