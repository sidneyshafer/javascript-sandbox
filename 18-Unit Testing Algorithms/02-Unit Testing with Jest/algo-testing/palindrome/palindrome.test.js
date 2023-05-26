const palindrome = require('./palindrome');

describe('Palindrome', () => {
    it('should be a function', () => {
        expect(typeof palindrome).toEqual('function');
    });

    it('should return a boolean', () => {
        expect(typeof palindrome('hello')).toEqual('boolean');
    });

    it('should return true if a palindrome', () => {
        expect(palindrome('kayak')).toBeTruthy();
        expect(palindrome('rotator')).toBeTruthy();
        expect(palindrome('wow')).toBeTruthy();
    });

    it('should return false if not a palindrome', () => {
        expect(palindrome('hello')).toBeFalsy();
        expect(palindrome('world')).toBeFalsy();
        expect(palindrome('bye')).toBeFalsy();
    });

    it('should return false if contains spaces', () => {
        expect(palindrome('hello world')).toBeFalsy();
        expect(palindrome(' wow')).toBeFalsy();
    });
})