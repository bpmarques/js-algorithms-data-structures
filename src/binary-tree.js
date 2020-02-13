/**
 * Binary Tree
 *
 * @link https://www.geeksforgeeks.org/construct-complete-binary-tree-given-array/
 */

function Node(element) {
    this.rightNode = null;
    this.leftNode = null;
    this.element = element;
}

function BinaryTree() {
    this.root = null;
    this.add = function(elements, rootNode, index) {
       if (index >= 0 && index < elements.length) {
           rootNode = new Node(elements[index]);
           rootNode.leftNode = this.add(elements, rootNode.leftNode, 2 * index + 1);
           rootNode.rightNode = this.add(elements, rootNode.rightNode, 2 * index + 2);
       }
       return rootNode;
    }
}

module.exports = BinaryTree;
