class QueueNode {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
    }

    add(item){
        const t = new QueueNode(item);
        if (this.last) {
            this.last.next = t;
        }
        this.last = t;
        if (!this.first) {
            this.first = this.last;
        }
    }

    remove() {
        if (this.first === null) {
            throw new Error("The queue is already empty");
        }

        const data = this.first.data;
        this.first = this.first.next;
        if (!this.first) {
            this.last = null;
        }

        return data;
    }

    peek(){
        if (!this.first){
            throw new Error("The queue is empty");
        }
        return this.first;
    }

    isEmpty(){
        return this.first === null;
    }
}

const queue = new Queue();
queue.add(5);
queue.add(6);
//console.log(JSON.stringify(queue));
queue.remove();
queue.remove();

//console.log(JSON.stringify(queue));
//queue.remove();

class TreeNode {
    constructor(data){
        this.data = data;
        this.children = [];
    }
}

class Tree {
    constructor(value){
        this.root = new TreeNode(value);
    }

    // search(root){
    //     let queue = new Queue();
    //     root.marked = true;
    //     queue.add(root);
    //     while(!queue.isEmpty()){
    //         let r = queue.remove();
    //         console.log(r);
    //         r.marked = true;
    //         for (let i=0; i < r.children; i++) {
    //             if (!children[i].marked) {
    //                 children[i].marked = true;
    //                 queue.add(children[i]);
    //             }
    //         }
    //     }
    // }

    BFS() {
        const q = new Queue();
        q.add(this.root);
        while (!q.isEmpty()) {
          console.log(q.first.data.data);
          q.first.data.children?.map(el=>q.add(el));
          q.remove();
        }
      }
}

let tree = new Tree(1);
tree.root.children = [new TreeNode(2), new TreeNode(3)];
tree.root.children[0].children = [new TreeNode(7), new TreeNode(9)];
tree.root.children[1].children = [new TreeNode(5)];

//console.log(JSON.stringify(tree));
tree.BFS();