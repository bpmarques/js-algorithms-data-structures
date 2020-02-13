const expect = require('chai').expect;
const quickSort = require('../src/quick-sort');
describe('QuickSort', function() {
    let arr;
    let sorted;

    beforeEach(function() {
        arr = [10, 50, 80, 40, 90, 20, 30];
        sorted = [10, 20, 30, 40, 50, 80, 90];
    });

    it('should sort', function() {
        expect(quickSort(arr, 0, 6)).to.have.members(sorted);
    });

    it('should return the same array if end is smaller than begin', () => {
       expect(quickSort(arr, 5, 3)).to.have.members(arr);
    });

    it('should sort correctly if array has two equals elements', () => {
        arr = [10, 50, 80, 40, 90, 20, 30, 50];
        sorted = [10, 20, 30, 40, 50, 50, 80, 90];
        expect(quickSort(arr, 0, 7)).to.have.members(sorted);
    });
});
