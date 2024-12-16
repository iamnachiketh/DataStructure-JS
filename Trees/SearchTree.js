const BST = require('./BinarySearchTree');
const Node = require('./Node');

let mytree = new BST();

mytree.insert(90);

mytree.insert(40);

mytree.insert(60);

mytree.insert(20);

mytree.insert(15);

mytree.insert(45);

mytree.insert(36);

mytree.insert(67);

mytree.insert(29);


function InOrderTraversal(root) {

    if (root === null) return;
    if (!root) {
        return;
    }
    InOrderTraversal(root.left);
    console.log(root.value);
    InOrderTraversal(root.right);
}

function PreOrderTraversal(root) {
    if (root === null)
        return;

    console.log(root.value);
    PreOrderTraversal(root.left);
    PreOrderTraversal(root.right);
}

function PostOrderTraversal(root) {
    if (root === null) return;

    PostOrderTraversal(root.left);
    PostOrderTraversal(root.right);
    console.log(root.value);
}

function searchBST(root, value) {
    if (root === null) {
        return new Node();
    }
    if (root.value === value) return root;
    if (value > root.value) return search(root.right, value);
    if (value < root.value) return search(root.left, value);
}

function MaxInTree(root) {
    if (root.right === null) {
        return root.value;
    }

    return MaxInTree(root.right);
}


function MinInTree(root) {
    if (root.left === null) {
        return root.value;
    }

    return MinInTree(root.left);
}



console.log(MaxInTree(mytree.root));

console.log(MinInTree(mytree.root));

console.log(searchBST(mytree.root, 200));

InOrderTraversal(mytree.root); // Since ita a binary tree inorder traversal will be sorted

PreOrderTraversal(mytree.root);

PostOrderTraversal(mytree.root);

