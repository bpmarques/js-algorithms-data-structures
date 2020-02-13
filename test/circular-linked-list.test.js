const expect = require('chai').expect;
const CircularLinkedList = require('../src/circular-linked-list');

describe('CircularLinkedList', function() {
    let circularLinkedList;

    beforeEach(function() {
        circularLinkedList = new CircularLinkedList();
    });

    describe('add function', function(){
        it('should add an item to the list', function() {
            circularLinkedList.addItem(1);
            expect(circularLinkedList.length).to.equal(1);
        });

        it('should add 2 items to the list', function() {
            circularLinkedList.addItem(1);
            circularLinkedList.addItem(2);
            expect(circularLinkedList.length).to.equal(2);
            expect(circularLinkedList.head.next).to.include({element: 2});
        });
    });

    describe('remove function', function(){
        it('should remove the head of the list', function() {
            circularLinkedList.addItem(1);
            circularLinkedList.addItem(2);
            circularLinkedList.addItem(3);
            circularLinkedList.remove(1);
            expect(circularLinkedList.length).to.equal(2);
            expect(circularLinkedList.head).to.include({element: 2});
            expect(circularLinkedList.head.next.next).to.equal(circularLinkedList.head);
        });

        it('should remove the last element of the list', function() {
            circularLinkedList.addItem(1);
            circularLinkedList.addItem(2);
            circularLinkedList.addItem(3);
            circularLinkedList.remove(3);
            expect(circularLinkedList.length).to.equal(2);
            expect(circularLinkedList.head.next).to.include({element: 2});
            expect(circularLinkedList.head.next.next).to.equal(circularLinkedList.head);
        });

        it('should remove an element from the list', function() {
            circularLinkedList.addItem(1);
            circularLinkedList.addItem(2);
            circularLinkedList.addItem(3);
            circularLinkedList.remove(2);
            expect(circularLinkedList.length).to.equal(2);
            expect(circularLinkedList.head.next).to.include({element: 3});
            expect(circularLinkedList.head.next.next).to.equal(circularLinkedList.head);
        });
    });

    describe('traverse function', function(){
        it('should create an array with the values of the elements in the list', function() {
            circularLinkedList.addItem(1);
            circularLinkedList.addItem(2);
            circularLinkedList.addItem(3);
            const result = circularLinkedList.traverse();
            expect(result).to.have.members([1, 2 ,3]);
        });
    });
});
