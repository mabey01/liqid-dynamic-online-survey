import getHumanFloat from './get-human-float.js';

describe('a getHumanFloat function', () => {
    it('should return 0 if no params are provided', () => {
        expect(getHumanFloat()).to.equal(0);
    });

    it('should return 0 if provided with a non Number', () => {
        expect(getHumanFloat('')).to.equal(0);
        expect(getHumanFloat({})).to.equal(0);
        expect(getHumanFloat([])).to.equal(0);
        expect(getHumanFloat(undefined)).to.equal(0);
    });

    it('should return single digit decimals if provided with single digit decimals', () => {
        expect(getHumanFloat(10.9)).to.equal(10.9);
    });

    it('should return double digit decimals if provided with double digit decimals', () => {
        expect(getHumanFloat(10.99)).to.equal(10.99);
    });

    it('should return rounded double digit decimals if provided with triple digit decimals', () => {
        expect(getHumanFloat(10.555)).to.equal(10.56);
    });
});
