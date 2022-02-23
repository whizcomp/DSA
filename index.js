class ListNode{
    constructor(data) {
        this.data = data;
        this.next=null
    }
}
class LinkedList{
    constructor(head=null,tail=null){
        this.head = head;
        this.tail = tail;
        this.count = 0;
    }
    push(val) {
        let newNode = new ListNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.count++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.count--;
        if (this.count == 0) {
            this.head = head;
            this.tail = tail;
        }
        return current;
    }
    shift() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.count--;
        if (this.count == 0) {
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail=this.head
        };
        let currentHead = this.head;
        this.head = newNode;
        this.head.next = currentHead;
        this.count++;
    }
}
