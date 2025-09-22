class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // add a node to the end of the list
    append(value) {
        const newNode = {
            value: value,
            next: null
        };

        // if list is empty, make new node the head
        if (!this.head) {
            this.head = newNode;
        } else {
            // find the last node and link it to the new node
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        
        this.size++;
        return this;
    }

    // add a node to the beginning of the list
    prepend(value) {
        const newNode = {
            value: value,
            next: this.head
        };
        this.head = newNode;
        this.size++;
        return this;
    }

    // insert at specific index
    insert(index, value) {
        if (index < 0 || index > this.size) {
            throw new Error('Index out of bounds');
        }

        if (index === 0) {
            return this.prepend(value);
        }

        const newNode = {
            value: value,
            next: null
        };

        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        newNode.next = current.next;
        current.next = newNode;
        this.size++;
        return this;
    }

    // remove by index
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Index out of bounds');
        }

        if (index === 0) {
            const removedValue = this.head.value;
            this.head = this.head.next;
            this.size--;
            return removedValue;
        }

        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        const removedValue = current.next.value;
        current.next = current.next.next;
        this.size--;
        return removedValue;
    }

    // remove by value (first occurrence)
    remove(value) {
        if (!this.head) return false;

        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return true;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
            this.size--;
            return true;
        }

        return false;
    }

    // find a value and return its index
    indexOf(value) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.value === value) {
                return index;
            }
            current = current.next;
            index++;
        }

        return -1;
    }

    // get value at specific index
    get(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Index out of bounds');
        }

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        return current.value;
    }

    // check if list contains a value
    contains(value) {
        return this.indexOf(value) !== -1;
    }

    // get the size of the list
    getSize() {
        return this.size;
    }

    // check if list is empty
    isEmpty() {
        return this.size === 0;
    }

    // convert list to array for easy viewing
    toArray() {
        const result = [];
        let current = this.head;
        
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        
        return result;
    }

    // clear the entire list
    clear() {
        this.head = null;
        this.size = 0;
    }

    // display the list
    display() {
        if (!this.head) {
            console.log('List is empty');
            return;
        }

        const values = this.toArray();
        console.log(values.join(' -> '));
    }
}

// example usage:
const list = new LinkedList();

// add some values
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);

console.log('List:', list.toArray()); // [0, 1, 2, 3]

// insert at specific position
list.insert(2, 1.5);
console.log('After insert:', list.toArray()); // [0, 1, 1.5, 2, 3]

// remove elements
list.remove(1.5);
console.log('After remove:', list.toArray()); // [0, 1, 2, 3]

// get specific elements
console.log('Element at index 2:', list.get(2)); // 2
console.log('Index of value 3:', list.indexOf(3)); // 3

// check properties
console.log('Size:', list.getSize()); // 4
console.log('Contains 2:', list.contains(2)); // true
console.log('Is empty:', list.isEmpty()); // false