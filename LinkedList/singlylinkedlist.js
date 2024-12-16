// Singly Linked List is a data structure which has node that node has information of the next node.

// Memory allocation is not continuous 

// we can add element at starting of the list, ending of the list, middle of the list

// we can delete element at starting of the list, ending of the list, middle of the list

// when we have to use linkedlist, if we are adding elements in the middle of the list.

// since no shifting operation is invloved effiency is increased.

function ListNode(value, right) {
    value === undefined ? this.value = 0 : this.value = value;
    right === undefined ? this.right = null : this.right = right;
}

function addStart(head,value) {
    let newNode = new ListNode(value,null)
    newNode.right = head;
    return newNode;
}

function addEnd(head,value) {
    let newNode = new ListNode(value,null);
    let current = head;
    while (current.right !== null) {
        current = current.right;
    }
    current.right = newNode;
    return head;
}

function addMiddle(head, value, iteration) {
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

let head = new ListNode(20);

head = addEnd(head,10);

head = addStart(head,40);

head = addMiddle(head,30,1);

console.log(head);




