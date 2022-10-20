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

        let temp = this.head;

        while (temp.next !== null) {
            temp = temp.next;

        }
        temp.next = node;
    }
    
    prepend = (value) => {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
    }

    size = () => {
        let temp = this.head;
        let total = 1;
        while (temp.next !== null) {
            temp = temp.next;
            total++;
        }

        return total;
    }

    headNode = () => {
        console.log(this.head);
    }

    tail = () => {
        let temp = this.head;

        while (temp.next !== null) {
            temp = temp.next;

        }
        console.log(temp);
        
    }

    at = (index) => {
        let counter = 1;
        let temp = this.head;

        if (counter === index) {
            return temp;
        }

        while (temp.next !== null) {
            temp = temp.next;
            counter++;
            if (counter === index) {
                return temp;
            }
        }
    }

    pop = () => {
        let temp = this.head;
        let before;

        while (temp.next !== null) {
            before = temp;
            temp = temp.next;
        }

        before.next = null;
    }

    contains = (value) => {
        let currentNode = this.head;
        if (currentNode.data === value) {
            return true;
        }
        while (currentNode.next !== null) {
            currentNode = currentNode.next;

            if (currentNode.data == value) {
                return true;
            }
        }
        return false;

    }

}

const list = new LinkedList;

list.append('2nd');
list.append('3rd');
list.append('4th');
list.prepend('new first');
list.prepend('new new first');
list.append('last item');