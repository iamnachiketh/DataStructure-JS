// create a Binary Search Tree 
const Node = require('./Node');

class BinarySearchTree{

    constructor() {
        this.root = null;
        
    }

    isEmpty(){
        return this.root === null;
    }

    insert(value){
        let newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode);
        }

    }

    // Inserting the node recursively 
    insertNode(root,node){
        if(root.value > node.value){
            if(root.left === null){
                root.left = node;
            }else{
                this.insertNode(root.left,node);
            }
        }else{
            if(root.right === null){
                root.right = node;
            }else{
                this.insertNode(root.right,node);
            }
        }
    }
}

module.exports = BinarySearchTree;
