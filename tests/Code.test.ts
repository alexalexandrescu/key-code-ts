import { Code } from '../src';

describe('Code Enum', () => {
    it('should contain the expected number of entries', () => {
        const keyCodeValues = Object.values(Code);
        expect(keyCodeValues.length).toBe(162); // Expected number based on MDN data
    });

    it('should contain specific keys', () => {
        expect(Code.KeyA).toBe('KeyA');
        expect(Code.Enter).toBe('Enter');
        expect(Code.Space).toBe('Space');
        expect(Code.Numpad0).toBe('Numpad0');
        expect(Code.ArrowDown).toBe('ArrowDown');
    });

    it('should not contain duplicate values', () => {
        const keyCodeValues = Object.values(Code);
        const uniqueValues = new Set(keyCodeValues);
        expect(uniqueValues.size).toBe(keyCodeValues.length); // Ensures no duplicates
    });
});