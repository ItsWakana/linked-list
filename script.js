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

    findLast = (node) => {
        if (node.next === null) {
            return node;
        }
        return this.findLast(node.next);
    }
    
    append = (value) => {
        const node = new Node(value);

        const lastNode = this.findLast(this.head);
        lastNode.next = node;
    }
    
    prepend = (value) => {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
    }

    size = () => {
        const countNodes = (node, total) => {
            if (node.next === null) {
                return total;
            }
            return countNodes(node.next, total+1);
        }

        const totalNodes = countNodes(this.head, 1);
        console.log(totalNodes);
    }

    headNode = () => {
        console.log(this.head);
    }

    tail = () => {
        const lastNode = this.findLast(this.head);
        console.log(lastNode);
    }


}

const list = new LinkedList;

list.append('2nd');
list.append('3rd');
list.append('4th');
list.prepend('new first');
list.prepend('new new first');
list.append('last item');
list.headNode();