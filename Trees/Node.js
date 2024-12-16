class Node{
    constructor(value){
        this.left = null;
        this.right = null;
        value ? this.value = value : this.value = 0; 
    }
}


module.exports =  Node;