# README

## Overview

This project demonstrates the implementation of reusable React components using TypeScript, with a focus on type safety, error handling, and flexibility. The components included are:

1. **Button Component**  
2. **List Component**  
3. **InputField Component**

Each component leverages TypeScript features such as generics, union types, intersection types, and type guards to ensure robustness and extensibility. Error handling mechanisms have been incorporated to provide clear feedback and maintain application stability.

---

## Components

### 1. **Button Component**

#### **Purpose**
A generic, reusable button component that supports flexible types for its value and includes error handling for disabled states.

#### **Key Features**
- Accepts any type for the button value using TypeScript generics.
- Includes optional `onClick` and `disabled` properties.
- Displays an error message as a tooltip if the button is disabled.

#### **Key Methods**
- **`handleClick`**: Prevents button actions when `disabled` is `true` and logs error messages.

#### **TypeScript Techniques**
- **Generics**: Ensures the `value` prop is type-safe and flexible for various data types.
- **Custom Error Type**:  

```typescript
type ButtonError = { type: 'disabled'; message: string };
```

- **Union Types**: Combines properties for error handling.


### 2. **List Component**

#### **Purpose**
A dynamic, reusable list component capable of rendering collections of any type with customizable rendering logic and filtering functionality.

#### **Key Features**
- Supports rendering of items of any type using TypeScript generics.
- Provides an optional isReadonly flag to restrict modifications.
- Includes error handling for empty lists and invalid filtering operations.

#### **Key Methods**
- **`filterItems`**: Filters the list based on a user-defined condition. Logs errors if the list is readonly or empty after filtering.

#### **TypeScript Techniques**
- **Generics**: Enables support for any type of list items.
- **Mapped Types**: Configures `isReadonly` to restrict modifications.
- **Custom Error Type**:  

```typescript
type ListError =
  | { type: 'empty'; message: string }
  | { type: 'invalid-filter'; message: string };
```

### 3. **InputField Component**

#### **Purpose**
A reusable input field component that supports multiple types (`text` and `number`), provides validation, and includes robust error handling for invalid inputs and required fields.

#### **Key Features**
- Dynamically validates input values based on type.
- Displays error messages for validation or when a required field is left empty.
- Supports custom error messages through props.

#### **Key Methods**
- **`handleChange`**: Validates user input based on the specified type (`text` or `number`c) and updates the parent component.

- **`handleBlur`**: Checks for required fields and sets appropriate error messages.

#### **TypeScript Techniques**
- **Union Types**: Ensures the `type` and `value` properties are constrained to specific valid options.

```typescript
type InputType = 'text' | 'number';
```

- **Type Guards**: Differentiates between `string` and `number` values to ensure accurate validation.

```typescript
const isString = (val: unknown): val is string => typeof val === 'string';
const isNumber = (val: unknown): val is number => typeof val === 'number';
```

- **Custom Error Type**:  

```typescript
type InputError =
  | { type: 'required'; message: string }
  | { type: 'validation'; message: string };
```

