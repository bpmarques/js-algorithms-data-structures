/**
 * Circular linked list
 *
 * @link https://www.geeksforgeeks.org/circular-linked-list-set-2-traversal
 */

function Node(element) {
    this.next = null;
    this.element = element;
}

function CircularLinkedList() {
    this.length = 0;
    this.head = null;

    this.addItem = function(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            if (!this.head.next) {
                this.head.next = node;
                node.next = this.head;
            } else {
                let current = this.head;
                while (current.next && current.next != this.head) {
                    current = current.next;
                }
                current.next = node;
                node.next = this.head;
            }
        }

        this.length++;
    };

    this.remove = function(element) {
        let current = this.head;
        if (current.element == element) {
            while (current.next && current.next != this.head) {
                current = current.next;
            }
            this.head = this.head.next;
            current.next = this.head;
        } else {
            let prev = null;
            while (current.next && current.next != this.head) {
                prev = current;
                current = current.next;
                if (current.element == element) {
                    break;
                }
            }

            if(current.next == this.head) {
                prev.next = this.head;
            } else {
                prev.next = current.next;
            }
        }

        this.length--;
    };

    this.traverse = function() {
        let current = this.head;
        let result = [];

        result.push(this.head.element);
        while (current.next && current.next != this.head) {
            current = current.next;
            result.push(current.element);
        }

        return result;
    };
}

module.exports = CircularLinkedList;
