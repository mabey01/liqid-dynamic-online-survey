import getPercentage from './get-percentage.js';

describe('a getPercentage function', () => {
    it('should return 0 if value is not a number', () => {
        expect(getPercentage('')).to.equal(0);
        expect(getPercentage('test')).to.equal(0);
        expect(getPercentage({})).to.equal(0);
        expect(getPercentage([])).to.equal(0);
    });

    it('should return 0 if no params are provided', () => {
        expect(getPercentage()).to.equal(0);
    });

    it('should return negative percentage if value is below min', () => {
        expect(getPercentage(-10)).to.equal(-10);
    });

    it('should return bigger than 100 if value is above max', () => {
        expect(getPercentage(110, 100)).to.equal(110);
    });

    it('should return float value if value is float', () => {
        expect(getPercentage(33.3)).to.equal(33.3);
    });

    it('should return float value', () => {
        expect(getPercentage(999, 1000)).to.equal(99.9);
    });
});
