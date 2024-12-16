
// % operator will make the pointer to come back at the same position.

class CircularQueue {
    constructor(size) {

        this.queue = [];
        this.size = size
        this.length = 0
        this.front = 0
        this.back = 0;
    
    }

    isEmpty() {
        return this.length == 0;
    }

    enqueue(element) {
        if (this.length >= this.size) {
            console.log("Maximum length exceeded");
            return;
        }
        this.queue[this.back % this.size] = element
        this.back++
        this.length++
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("No elements in the queue");
            return;
        }
        const value = this.getFront()
        delete this.queue[this.front % this.size];
        this.front++
        this.length--
        return value
    }

    getFront() {
        if (this.isEmpty()) {
            console.log("No elements in the queue")
            return;
        }
        return this.queue[this.front % this.size]
    }

    clear() {
        this.queue = new Array()
        this.length = 0
        this.back = 0
        this.front = 0
    }

}

let myQueue = new CircularQueue(5);

myQueue.enqueue(20);

myQueue.enqueue(40);

myQueue.enqueue(30);

myQueue.enqueue(20);

myQueue.enqueue(50);

myQueue.enqueue(60);

console.log(myQueue);

myQueue.dequeue();

myQueue.enqueue(90);

console.log(myQueue);