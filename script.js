class Node {

    constructor(data = null, nextNode = null) {
        this.data = data;
        this.nextNode = nextNode;
    }

    value = (value) => {
        this.data = value;
    }

    next = (node) => {
        this.nextNode = node;
    }
    

}


class LinkedList {
    
    prepend = (value) => {
        const node = new Node(value);
    }
}

const list = new LinkedList;
