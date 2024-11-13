import {Code} from "./Code.enum";

export namespace CodeUtils {
    export function isLetterKey(code: Code): boolean {
        return /^Key[A-Z]$/.test(code);
    }

    export function isDigitKey(code: Code): boolean {
        return /^Digit[0-9]$/.test(code) || /^Numpad[0-9]$/.test(code);
    }

    export function isFunctionKey(code: Code): boolean {
        return /^F([1-9]|1[0-9]|2[0-4])$/.test(code);
    }

    export function isNavigationKey(code: Code): boolean {
        return [
            Code.ArrowUp,
            Code.ArrowDown,
            Code.ArrowLeft,
            Code.ArrowRight,
            Code.PageUp,
            Code.PageDown,
            Code.Home,
            Code.End
        ].includes(code);
    }

    export function isModifierKey(code: Code): boolean {
        return [
            Code.AltLeft,
            Code.AltRight,
            Code.ControlLeft,
            Code.ControlRight,
            Code.ShiftLeft,
            Code.ShiftRight,
            Code.MetaLeft,
            Code.MetaRight,
            Code.CapsLock
        ].includes(code);
    }

    export function isMediaKey(code: Code): boolean {
        return [
            Code.AudioVolumeUp,
            Code.AudioVolumeDown,
            Code.AudioVolumeMute,
            Code.MediaPlayPause,
            Code.MediaTrackNext,
            Code.MediaTrackPrevious,
            Code.MediaStop,
            Code.MediaSelect
        ].includes(code);
    }

    export function isValidCode(value: string): value is Code {
        return Object.values(Code).includes(value as Code);
    }
}

