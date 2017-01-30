const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let node = new Node(data);

        if (this.length == 0) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }

        this.length++;

        //return this;
    }

    head() {}

    tail() {}

    at(index) {
        var x = this._head;

        for (var i = 0; i < index; i++) {
            
            x = x.next;
        }

        return x.data;
    }

    insertAt(index, data) {
        var x = this._head;
        for (var i = 0; i <= index; i++) {
            x = x.next;
        }
        x.data = data;
    }

    isEmpty() {
        if (this.length == 0) {return true} else {return false}
    }

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
