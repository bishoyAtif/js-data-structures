class DoublyLinkedListNode
{
    constructor(value, next = null, previous = null) {
        this.value = value
        this.next = next
        this.previous = previous
    }
}

class DoublyLinkedList
{
    constructor() {
        this.head = null
        this.length = 0
        this.tail = this.head
    }

    append(value) {
        if (this.head == null) {
            this.head = new DoublyLinkedListNode(value)
            this.tail = this.head
            this.length = 1
            return this
        }

        this.tail.next = new DoublyLinkedListNode(value, null, this.tail)
        this.tail = this.tail.next
        this.length = this.length + 1
        return this
    }

    prepend(value) {
        if (this.head == null) {
            this.head = new DoublyLinkedListNode(value)
            this.tail = this.head
            this.length = 1
            return this
        }

        let newNode = new DoublyLinkedListNode(value, this.head)
        this.head.previous = newNode
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

        let newNode = new DoublyLinkedListNode(value, tmpPointer.next, tmpPointer)
        tmpPointer.next.previous = newNode
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
            if (tmpPointer.next.next) {
                tmpPointer.next.next.previous = tmpPointer
            }
            tmpPointer.next = tmpPointer.next.next
            this.length = this.length - 1
        }

        return this
    }

    print() {
        let tmpPointer = this.head
        let res = []
        while (tmpPointer != null) {
            res.push(tmpPointer.value)
            tmpPointer = tmpPointer.next
        }

        return res
    }

    printReverse() {
        let tmpPointer = this.tail
        let res = []
        while (tmpPointer != null) {
            res.push(tmpPointer.value)
            tmpPointer = tmpPointer.previous
        }

        return res
    }
}

let ll = new DoublyLinkedList()
ll.append(0)
ll.insert(1, 1)
ll.insert(2, 2)
ll.insert(3, 3)
ll.insert(4, 4)
ll.append(5)
// ll.insert(1, 1)
// ll.insert(1, 3)
// ll.insert(1, 2)
// ll.append(4, 44)
ll.remove(4)
ll.remove(1)
console.log(ll.print())