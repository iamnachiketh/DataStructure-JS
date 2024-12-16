
// It works same as the queue but based on the priority of the element.




class PriorityQueueImp{
    constructor(){
        this.queue = [];
        this.left = 0;
    }

    enqueue(obj){
        this.queue.push(obj);
        this.queue.sort((a,b)=>a.priority - b.priority);
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

    displayQueue(){
        this.queue.forEach((value)=>{
            if(value !== undefined)
                console.log(value);
        })
    }

}

let mypqueue = new PriorityQueueImp();

mypqueue.enqueue({
    element:50,
    priority:4
});

mypqueue.enqueue({
    element:20,
    priority:1
});

mypqueue.enqueue({
    element:10,
    priority:3
});

mypqueue.enqueue({
    element:15,
    priority:2
});

console.log(mypqueue.displayQueue());

console.log(mypqueue.dequeue());

console.log(mypqueue.isEmpty());

console.log(mypqueue.displayQueue());



