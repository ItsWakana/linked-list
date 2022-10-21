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
        this.head = new Node('1st');
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
        let counter = 0;
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

    find = (value) => {
        let counter = 0;

        let currentNode = this.head;
        if (currentNode.data === value) {
            return 0;
        }

        while (currentNode.next !== null) {
            currentNode = currentNode.next;
            counter++;

            if (currentNode.data === value) {
                return counter;
            }
        }

        return null;
    }

    toString = () => {
        let currentNode = this.head;
        let string = `( ${this.head.data} )`

        while (currentNode.next !== null) {
            currentNode = currentNode.next;
            string += ` => ( ${currentNode.data} )`;
        }
        string += ` => ${currentNode.next}`;
        console.log(string);
    }
    
    insertAt = (value, index) => {

        const node = new Node(value);
        let previousNode;
        let currentNode = this.head;
        let nextNode = currentNode.next;
        let counter = 0;

        if (index === 0) {
            node.next = currentNode;
            this.head = node;
            return;
        }

        while (currentNode.next !== null) {
            if (counter === index) {

                previousNode.next = node;
                node.next = currentNode;
                return;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
            nextNode = nextNode.next;
            counter++;
        }
        return currentNode;

    }

}

const list = new LinkedList;

list.append('2nd');
list.append('3rd');
list.append('4th');
list.append('5th');
list.append('6th');
list.insertAt('newly inserted', 0);
list.toString();