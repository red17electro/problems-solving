class StackNode {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(item){
        const t = new StackNode(item);
        t.next = this.top;
        this.top = t;
    }

    pop(){
        const prevTop = this.top.data;
        this.top = this.top.next;
        return prevTop;
    }

    peek() {
        if (!this.top){
            throw new Error('The stack is empty!');
        }

        return this.top.data;
    }

    isEmpty(){
        return this.top === null;
    }
}