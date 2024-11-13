import { Code } from '../src/Code.enum';
import { CodeUtils } from '../src/utils';

describe('Code Utilities', () => {
    describe('CodeUtils.isLetterKey', () => {
        it('should return true for letter keys', () => {
            expect(CodeUtils.isLetterKey(Code.KeyA)).toBe(true);
            expect(CodeUtils.isLetterKey(Code.KeyZ)).toBe(true);
        });

        it('should return false for non-letter keys', () => {
            expect(CodeUtils.isLetterKey(Code.Digit1)).toBe(false);
            expect(CodeUtils.isLetterKey(Code.Space)).toBe(false);
        });
    });

    describe('CodeUtils.isDigitKey', () => {
        it('should return true for digit keys', () => {
            expect(CodeUtils.isDigitKey(Code.Digit0)).toBe(true);
            expect(CodeUtils.isDigitKey(Code.Numpad9)).toBe(true);
        });

        it('should return false for non-digit keys', () => {
            expect(CodeUtils.isDigitKey(Code.KeyA)).toBe(false);
            expect(CodeUtils.isDigitKey(Code.Space)).toBe(false);
        });
    });

    describe('CodeUtils.isFunctionKey', () => {
        it('should return true for function keys', () => {
            expect(CodeUtils.isFunctionKey(Code.F1)).toBe(true);
            expect(CodeUtils.isFunctionKey(Code.F24)).toBe(true);
        });

        it('should return false for non-function keys', () => {
            expect(CodeUtils.isFunctionKey(Code.Digit1)).toBe(false);
            expect(CodeUtils.isFunctionKey(Code.KeyA)).toBe(false);
        });
    });

    describe('CodeUtils.isNavigationKey', () => {
        it('should return true for navigation keys', () => {
            expect(CodeUtils.isNavigationKey(Code.ArrowDown)).toBe(true);
            expect(CodeUtils.isNavigationKey(Code.PageUp)).toBe(true);
        });

        it('should return false for non-navigation keys', () => {
            expect(CodeUtils.isNavigationKey(Code.KeyA)).toBe(false);
            expect(CodeUtils.isNavigationKey(Code.Digit1)).toBe(false);
        });
    });

    describe('CodeUtils.isModifierKey', () => {
        it('should return true for modifier keys', () => {
            expect(CodeUtils.isModifierKey(Code.ControlLeft)).toBe(true);
            expect(CodeUtils.isModifierKey(Code.ShiftRight)).toBe(true);
        });

        it('should return false for non-modifier keys', () => {
            expect(CodeUtils.isModifierKey(Code.KeyA)).toBe(false);
            expect(CodeUtils.isModifierKey(Code.Space)).toBe(false);
        });
    });

    describe('CodeUtils.isMediaKey', () => {
        it('should return true for media keys', () => {
            expect(CodeUtils.isMediaKey(Code.MediaPlayPause)).toBe(true);
            expect(CodeUtils.isMediaKey(Code.AudioVolumeUp)).toBe(true);
        });

        it('should return false for non-media keys', () => {
            expect(CodeUtils.isMediaKey(Code.KeyA)).toBe(false);
            expect(CodeUtils.isMediaKey(Code.Space)).toBe(false);
        });
    });

    describe('CodeUtils.isValidCode', () => {
        it('should return true for valid Code values', () => {
            expect(CodeUtils.isValidCode('KeyA')).toBe(true);
            expect(CodeUtils.isValidCode('Enter')).toBe(true);
        });

        it('should return false for invalid Code values', () => {
            expect(CodeUtils.isValidCode('InvalidKey')).toBe(false);
            expect(CodeUtils.isValidCode('')).toBe(false);
        });
    });
});