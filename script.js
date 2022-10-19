class Node {

    constructor(data = null, next = null) {
        this.data = data;
        this.next = next;
    }

    value = (value) => {
        this.data = value;
    }

}

class LinkedList {

    constructor() {
        this.head = new Node('one');
    }
    
    append = (value) => {
        const node = new Node(value);
        const findEnd = (node) => {
            if (node.next === null) {
                return node;
            }
            return findEnd(node.next);
        }

        const lastNode = findEnd(this.head);
        lastNode.next = node;
    }   
}

const list = new LinkedList;

list.append('another node');
list.append('3rd');
list.append('4th');
console.log(list);
