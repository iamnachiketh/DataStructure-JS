// Mainly memory is divided in two parts stack memory and heap memory

// Heap Memory

// Heap Memory is also divided into different types: New Space, Old Space, large object space, code space, cell space, property cell space, map space

// Each space is divided into pages when ever we have to allocate a object JS engine will look for one of the slot in the pages

// If a page gets full new page will be allocated to the object.


// Stack memory in this memory all the primitive variable and function call are stored

// Accessing stack memory is very quick 

// With the value of the object is stored in the heap memory but the reference is stored in the stack.

