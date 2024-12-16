// In doubly linked list we can travel both backwards and forward.


function ListNode(value, left, right) {
    value === undefined ? this.value = 0 : this.value = value;
    left === undefined ? this.left = null : this.left = left;
    right === undefined ? this.right = null : this.right = right;
}

function addEnd(head, value) {
    let newNode = new ListNode(value);

    if (head === null) {
    
        return newNode;
    }

    let current = head;
    
    while (current.right !== null) {
        current = current.right;
    }
    
    current.right = newNode;
    
    newNode.left = current;
    
    return head;
}

function addStart(head, value) {

    let newNode = new ListNode(value);

    if (head === null) {
        return newNode;
    }
    
    head.left = newNode;
    
    newNode.right = head;
    
    return newNode;
}

function addMiddle(head, value, iteration) {
    let newNode = new ListNode(value);

    if (head === null) {
        return newNode;
    }

    let current = head;

    while (current.right !== null && iteration !== 0) {
        current = current.right;
        iteration--;
    }

    if (current.right === null) {
        console.log("No list with that length.");
        return head;
    }
    let temp = new ListNode(0);

    temp = current.right;

    current.right = newNode;
    
    newNode.left = current;
    
    newNode.right = temp;
    
    return head;
}


function traverseList(head){
    if(head === null){
        console.log("Head is null");
        return;
    }

    let cur = head;
    while(cur.right !== null){
        console.log(cur.value);
        cur = cur.right;
    }
    console.log(cur.value);

    console.log("traverse Backwards");

    while(cur!==null){
        console.log(cur.value);
        cur = cur.left;
    }

}


let head = new ListNode(20);

addEnd(head,30);

addEnd(head,40);

addEnd(head,20);

addEnd(head,15);

traverseList(head);




