// Singly Linked List is a data structure which has node that node has information of the next node.

// Memory allocation is not continuous 

// we can add element at starting of the list, ending of the list, middle of the list

// we can delete element at starting of the list, ending of the list, middle of the list

// when we have to use linkedlist, if we are adding elements in the middle of the list.

// since no shifting operation is invloved effiency is increased.

// Using singly linkedlist we can only traverse forward.

function ListNode(value, right) {
    value === undefined ? this.value = 0 : this.value = value;
    right === undefined ? this.right = null : this.right = right;
}

function addNodeStart(head,value) {
    let newNode = new ListNode(value,null)
    newNode.right = head;
    return newNode;
}

function addNodeEnd(head,value) {
    let newNode = new ListNode(value,null);
    let current = head;
    while (current.right !== null) {
        current = current.right;
    }
    current.right = newNode;
    return head;
}

function addNodeMiddle(head, value, iteration) {
    let newNode = new ListNode(value,null);
    let current = head;
    while (iteration !== 0 && current.right!==null) {
        current = current.right;
        iteration--;
    }
    newNode.right = current.right;
    current.right = newNode;
    return head;
}

function deleteNodeStart(head){
    let current = head.right;
    return current;
}

function deleteNodeEnd(head){
    let current = head;
    let prev = null;
    while(current.right!==null){
        prev = current;
        current = current.right;
    }
    prev.right = null;
    return head;
}

function deleteAtMiddle(head,iteration){
    let current = head;
    let prev = null;
    while(current.right!==null && iteration!==0){
        prev = current;
        current = current.right;
        iteration--;
    }
    if(current.right === null && iteration>0){
        console.log("Length is less than number of iterations");
        return;
    }

    prev.right = current.right;
    return head;
}


let head = new ListNode(20);

head = addNodeEnd(head,10);

head = addNodeStart(head,40);

head = addNodeStart(head,100);

head = addNodeStart(head,90);

head = addNodeStart(head,50);

head = addNodeMiddle(head,30,1);

console.log(head);

head = deleteNodeStart(head);

console.log(head);




