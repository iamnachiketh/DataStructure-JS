// In doubly linked list we can travel both backwards and forward.


function ListNode(value, left, right) {
    value === undefined ? this.value = 0 : this.value = value;
    left === undefined ? this.left = null : this.left = left;
    right === undefined ? this.right = null : this.right = right;
}

function addNodeEnd(head, value) {
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

function addNodeStart(head, value) {

    let newNode = new ListNode(value);

    if (head === null) {
        return newNode;
    }

    head.left = newNode;

    newNode.right = head;

    return newNode;
}

function addNodeMiddle(head, value, iteration) {
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


function traverseList(head) {
    if (head === null) {
        console.log("Head is null");
        return;
    }

    let cur = head;
    while (cur.right !== null) {
        console.log(cur.value);
        cur = cur.right;
    }
    console.log(cur.value);

    console.log("traverse Backwards");

    while (cur !== null) {
        console.log(cur.value);
        cur = cur.left;
    }

}

function deleteNodeStart(head) {
    head = head.right;
    head.left = null;
    return head;
}

function deleteNodeEnd(head) {
    let curr = head;
    let prev = null;

    while (curr.right !== null) {
        prev = curr;
        curr = curr.right;
    }
    prev.right = null;
    return head;
}


function deleteNodeMiddle(head, iteration) {
    if (head === null) {
        console.log("The list is empty.");
        return null;
    }

    let curr = head;
    let prev = null;

    // Traverse to the node at the given iteration
    while (curr !== null && iteration !== 0) {
        prev = curr;
        curr = curr.right;
        iteration--;
    }

    // If iteration exceeds the length of the list
    if (curr === null) {
        console.log("Iteration exceeds the length of the list.");
        return head;
    }

    // If deleting the head node
    if (prev === null) {
        head = curr.right; // Update head to the next node
        if (head !== null) {
            head.left = null;
        }
        return head;
    }

    // If deleting a middle or last node
    prev.right = curr.right;
    if (curr.right !== null) {
        curr.right.left = prev;
    }

    return head;
}


let head = new ListNode(20);

head = addNodeEnd(head, 30);

head = addNodeEnd(head, 20);

head = addNodeEnd(head, 15);

head = addNodeEnd(head, 60);

head = addNodeEnd(head, 90);

head = addNodeEnd(head, 45);

traverseList(head);

head = deleteNodeStart(head);

head = deleteNodeEnd(head);

head = deleteNodeMiddle(head,4);

console.log("=============================")

traverseList(head);





