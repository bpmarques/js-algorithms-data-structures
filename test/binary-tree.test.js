const expect = require('chai').expect;
const BinaryTree = require('../src/binary-tree');

describe('BinaryTree', function() {
    const elements = [1, 2, 3, 4, 5, 6];
    describe('add function', function() {
        it('should add all elements from array and return the root element', function() {
            const tree = new BinaryTree();
            tree.root = tree.add(elements, tree.root, 0);
            expect(tree.root.element).to.equal(elements[0]);
            expect(tree.root.leftNode.element).to.equal(elements[1]);
            expect(tree.root.rightNode.element).to.equal(elements[2]);
            expect(tree.root.leftNode.leftNode.element).to.equal(elements[3]);
            expect(tree.root.leftNode.rightNode.element).to.equal(elements[4]);
            expect(tree.root.rightNode.leftNode.element).to.equal(elements[5]);
        });

        it('should return null if index is negative', function() {
            const tree = new BinaryTree();
            tree.root = tree.add(elements, tree.root, -1);
            expect(tree.root).to.equal(null);
        });

        it('should return null if index is greater than array length', function() {
            const tree = new BinaryTree();
            tree.root = tree.add(elements, tree.root, elements.length + 1);
            expect(tree.root).to.equal(null);
        });

        it('should add all elements from array even if the root node param is null', function() {
            const tree = new BinaryTree();
            tree.root = tree.add(elements, null, 0);
            expect(tree.root.element).to.equal(elements[0]);
            expect(tree.root.leftNode.element).to.equal(elements[1]);
            expect(tree.root.rightNode.element).to.equal(elements[2]);
            expect(tree.root.leftNode.leftNode.element).to.equal(elements[3]);
            expect(tree.root.leftNode.rightNode.element).to.equal(elements[4]);
            expect(tree.root.rightNode.leftNode.element).to.equal(elements[5]);
        });
    });
});
