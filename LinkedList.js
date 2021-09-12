class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = null;
    }
}

// addNode
// prePend
// addNodeAt
// delete

class LinkedList{
    constructor() {
        this.root = null;
        this.size = 0;
    }

    prepend(node){
        let oldRoot = this.root;
        this.root = node;
        node.next = oldRoot;;
    }

    add(node){
        if (!this.root){
            this.root = node;
        } else {
            let lastNode = this.root;
            while(lastNode.next){
                lastNode = lastNode.next;
            }
            lastNode.next = node;
        }
        this.size++;
    }

    addAt(node, i){
        if (i == 0){
            let currentRoot = this.root;
            this.root = node;
            this.root.next = currentRoot;
            this.size++;
        } else if (i < 0 || i > this.size - 1){
            return;
        } else {
            let count = 0;
            let curr = this.root;
            while (count !== i){
                curr = curr.next;
                count++;
            }

            let store = curr.next;
            curr.next = node;
            node.next = store;
            this.size++;
        }
    }

    getAt(index){
        let count = 0;
        let curr = this.root;
        while (count !== index){
            if (!curr){
                return null;
            }

            curr = curr.next;
            count++;
        }

        console.log(curr);

        return curr;
    }

    remove(){
        if (this.size === 0) {
            return;
        } else if (this.size === 1) {
            this.root = null;
            this.size--;
        } else {
            const lastNode = this.getAt(this.size - 2);
            lastNode.next = null;
            this.size--;
        }
    }
}



let ll = new LinkedList();

ll.add(new Node(1));
ll.add(new Node(3));
ll.add(new Node(5));
ll.add(new Node(7));
ll.add(new Node(6));

console.log(ll.getAt(0));

console.log(JSON.stringify(ll));

ll.remove();

console.log(JSON.stringify(ll));

ll.addAt(new Node(4), 3);

console.log(JSON.stringify(ll));

console.log(ll.getAt(3));

// console.log(ll);

// ll.addNode(new Node(5));

// console.log(ll);

// ll.addNode(new Node(6));

// console.log(ll);

// ll.prePend(new Node(4));

// console.log(JSON.stringify(ll));