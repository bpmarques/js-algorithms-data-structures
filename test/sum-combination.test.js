const expect = require('chai').expect;
const sumCombination = require('../src/sum-combination');

describe('SumCombination', function() {
    it('should return two combinations', function() {
        expect(sumCombination([3, 2], [1, 4], 2, 2)).to.have.members([7, 6]);
    });
    it('should return three combinations', function() {
        expect(sumCombination([1, 3], [9, 10], 2, 3)).to.have.members([13, 12, 11]);
    });
    it('should return three combinations considering the max number in the second array', function() {
       expect(sumCombination([4, 2, 5, 1], [8, 0, 3, 5], 4, 3)).to.have.members([13, 12, 10]);
    });
    it('should return three combinations considering the max number in the first array', function() {
        expect(sumCombination([8, 0, 3, 5], [4, 2, 5, 1], 4, 3)).to.have.members([13, 12, 10]);
    });
    it('should return empty array if combination param is 0', function() {
        expect(sumCombination([8, 0, 3, 5], [4, 2, 5, 1], 4, 0)).to.have.members([]);
    });
});
