class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }
    // add element to top of stack
    push(element) {
        this.items[this.count] = element;
        console.log(`${element} added to ${this.count} `)
        this.count += 1;
        return this.count - 1
    }

    // return and remove top element in stack, return undefined if stack empty
    pop() {
        if(this.count == 0) return undefined;
        let deleteItem = this.items[this.count - 1];
        this.count -= 1;
        console.log(`${deleteItem} removed`)
        return deleteItem;
    }
    // check top element in stack
    peek() {
        console.log(`top element is ${this.items[this.count - 1]}`)
        return this.items[this.count -1];
    }

    //check if stack empty
    isEmpty() {
        console.log(this.count == 0 ? 'stack is empty':'stack is not empty');
        return this.count == 0;
    }
    
    //check size of stack
    size() {
        console.log(`${this.count} element in stack`)
    }

    //print elements in stack
    print() {
        let str = '';
        for(let i = 0; i < this.count; i++) {
            str += this.items[i] + ' ';
        }
        return str;
    }
    
    //clear stack
    clear() {
        this.items = [];
        this.count = 0;
        console.log('stack cleared');
        return this.items
    }
}

const stack = new Stack();
