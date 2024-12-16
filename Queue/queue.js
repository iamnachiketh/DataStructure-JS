// // A data structure used to store organize and mannage data.

// Queue is a data structure which is also called as FIFO data structure

// FIFO - First In First Out

// It has operations like enqueue, dequeue, peek, peek, isEmpty

// enqueue: Its is used to add the element to the queue

// dequeue: Its used to delete the element from the queue

// peek: Its used to get the first element in the queue

// isEmpty: Its is used to check if the queue is empty or not.

class QueueImp{
    constructor(queue = [],left=0,right=0){
        this.queue = queue;
        this.left = left;
        this.right = right;
    }

    enqueue(ele){
        this.queue.push(ele);
        this.right +=1;
    }

    dequeue(){
        if(this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }
        let item = this.queue[this.left];
        delete this.queue[this.left];
        this.left++;
        return item;
    }

    peek(){
        return this.queue[this.left];
    }

    isEmpty(){
        return this.queue.length === 0;
    }

}

let myQueue = new QueueImp();

myQueue.enqueue(20);
myQueue.enqueue(40);
myQueue.enqueue(10);
myQueue.enqueue(30);

console.log(myQueue);

console.log(myQueue.isEmpty());

myQueue.dequeue();

console.log(myQueue.peek());

console.log(myQueue); 