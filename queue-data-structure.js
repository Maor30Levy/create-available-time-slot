class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(meeting) {
        const newNode = new Node(meeting);
        if (this.size === 0) this.first = newNode;
        else this.last.next = newNode;
        this.last = newNode;
        return ++this.size;
    }

    dequeue() {
        if (this.first == null) return;
        this.size--;
        const firstNode = this.first;
        this.first = this.first.next;
        firstNode.next = null;
        return firstNode.value;
    }
}

module.exports = Queue;