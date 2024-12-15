// A data structure used to store organize and mannage data.

// Stack is a data structure which is also called as LIFO data structure

// LIFO - Last In First Out

// Stack has operations like push, pop, isEmpty, peek, size

// Push() function is used to add an element to the stack

// pop() function is used to delete an element from the stack

// The element that is deleted will be at the top of the stack

// isEmpty() checks if the stack is empty or not

// size will return the total number of items of the stack

// peek will return the top element in the stack

// Managing Functions: JavaScript uses a stack to keep track of functions. When a function is called, it goes on the stack. When it’s done, it comes off.

// Undo Buttons: Like in a text editor, where you can undo your last actions.

// Solving Puzzles: Some puzzles can be solved using stacks.

class StackImp{

    constructor(stack = []){
        this._stack = stack;
    }

    push(ele){
        // Add an element to the stack
        // let ele = Number(prompt("Enter the value to the stack: "));
        this._stack.push(ele);
    }

    pop(){
        // Remove an element from the stack
        if(!this.isEmpty()){
            this._stack.pop();
        }else{
            console.log("Stack is empty");
        }
    }

    isEmpty(){
        // Check if the stack is empty or not
        if(this._stack.length)
            return false;
        else
            return true;
    }

    size(){

        // Return the size of the stack
        if(this.isEmpty())
            return 0;
        else 
            return this._stack.length;
    }

    peek(){
        // Return the top element of the stack
        if(!this.isEmpty()){
            return this._stack[this._stack.length - 1];
        }
        else{
            console.log("Stack is empty");
        }
    }
}


let mystack = new StackImp();

mystack.push(20);
mystack.push(10);
mystack.push(60);
mystack.push(40);

console.log(mystack);

mystack.pop();

console.log(mystack);

console.log(mystack.peek());

console.log(mystack.size());
