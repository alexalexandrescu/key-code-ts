
# Code Enum Library

**Code Enum Library** is a TypeScript library that provides an exhaustive enum for keyboard event codes (`KeyboardEvent.code`). It allows for easy and consistent handling of keyboard inputs based on physical key positions across different layouts, alongside helpful utility functions to manage keyboard events.

- **Code values source**: [MDN KeyboardEvent Code Values](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values)
- **Data last updated**: 2024-08-13

### Inspired By

This library was inspired by the following projects, which offer similar functionality for key codes and keyboard event handling:

- [ts-keycode-enum](https://www.npmjs.com/package/ts-keycode-enum): Provides TypeScript enums for `KeyboardEvent.keyCode` values.
- [ts-key-enum](https://www.npmjs.com/package/ts-key-enum): Offers enums for `KeyboardEvent.key`, allowing developers to handle characters associated with key events in a standardized way.

## Installation

Install the package via npm:

```bash
npm install keyboard-code-enum
```

## Usage

Import the `Code` enum and/or the `CodeUtils` utilities as needed:

```typescript
import { Code, CodeUtils } from 'keyboard-code-enum';
```

### Example: Handling Keyboard Events

```typescript
document.addEventListener('keydown', (event) => {
    const code = event.code as Code;

    if (CodeUtils.isLetterKey(code)) {
        console.log('A letter key was pressed');
    } else if (CodeUtils.isFunctionKey(code)) {
        console.log('A function key was pressed');
    } else if (CodeUtils.isModifierKey(code)) {
        console.log('A modifier key was pressed');
    } else if (CodeUtils.isMediaKey(code)) {
        console.log('A media key was pressed');
    } else {
        console.log('Other key:', code);
    }
});
```

## API

### `Code` Enum

The `Code` enum contains all standard keyboard event `code` values (e.g., `KeyA`, `ArrowUp`, `Enter`, `F1`, etc.), based on the MDN documentation.

```typescript
import { Code } from 'keyboard-code-enum';

console.log(Code.KeyA); // Outputs: "KeyA"
```

### `CodeUtils` Namespace

`CodeUtils` provides various helper functions to categorize and validate `KeyboardEvent.code` values.

#### `CodeUtils.isLetterKey(code: Code): boolean`

Checks if the `code` is a letter key (A-Z).

```typescript
CodeUtils.isLetterKey(Code.KeyA); // true
CodeUtils.isLetterKey(Code.Digit1); // false
```

#### `CodeUtils.isDigitKey(code: Code): boolean`

Checks if the `code` is a numeric key (0-9 on main keyboard or numpad).

```typescript
CodeUtils.isDigitKey(Code.Digit1); // true
CodeUtils.isDigitKey(Code.Numpad0); // true
```

#### `CodeUtils.isFunctionKey(code: Code): boolean`

Checks if the `code` is a function key (F1-F24).

```typescript
CodeUtils.isFunctionKey(Code.F1); // true
```

#### `CodeUtils.isNavigationKey(code: Code): boolean`

Checks if the `code` is a navigation key (arrows, home, end, page up/down).

```typescript
CodeUtils.isNavigationKey(Code.ArrowLeft); // true
```

#### `CodeUtils.isModifierKey(code: Code): boolean`

Checks if the `code` is a modifier key (Shift, Ctrl, Alt, Meta).

```typescript
CodeUtils.isModifierKey(Code.ControlLeft); // true
CodeUtils.isModifierKey(Code.AltRight); // true
```

#### `CodeUtils.isMediaKey(code: Code): boolean`

Checks if the `code` is a media control key (volume, play, pause, etc.).

```typescript
CodeUtils.isMediaKey(Code.MediaPlayPause); // true
CodeUtils.isMediaKey(Code.AudioVolumeMute); // true
```

#### `CodeUtils.isValidCode(value: string): boolean`

Validates if a given string is a valid `Code` value.

```typescript
CodeUtils.isValidCode('KeyA'); // true
CodeUtils.isValidCode('InvalidKey'); // false
```

## Contributing

Contributions are welcome! If you’d like to improve this library, please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License.
