README
Overview
This project demonstrates the implementation of reusable React components using TypeScript, with a focus on type safety, error handling, and flexibility. The components included are:

Button Component
List Component
InputField Component
Each component leverages TypeScript features such as generics, union types, intersection types, and type guards to ensure robustness and extensibility. Error handling mechanisms have been incorporated to provide clear feedback and maintain application stability.

Components
1. Button Component
Purpose
A generic, reusable button component that supports flexible types for its value and includes error handling for disabled states.

Key Features
Accepts any type for the button value using TypeScript generics.
Includes optional onClick and disabled properties.
Displays an error message as a tooltip if the button is disabled.
Key Methods
handleClick: Prevents button actions when disabled is true and logs error messages.
TypeScript Techniques
Generics: Ensures the value prop is type-safe and flexible for various data types.
Custom Error Type:
typescript
Copy code
type ButtonError = { type: 'disabled'; message: string };
Union Types: Combines properties for error handling.
2. List Component
Purpose
A dynamic, reusable list component capable of rendering collections of any type with customizable rendering logic and filtering functionality.

Key Features
Supports rendering of items of any type using TypeScript generics.
Provides an optional isReadonly flag to restrict modifications.
Includes error handling for empty lists and invalid filtering operations.
Key Methods
filterItems: Filters the list based on a user-defined condition. Logs errors if the list is readonly or empty after filtering.
TypeScript Techniques
Generics: Enables support for any type of list items.
Mapped Types: Configures isReadonly to restrict modifications.
Custom Error Types:
typescript
Copy code
type ListError =
  | { type: 'empty'; message: string }
  | { type: 'invalid-filter'; message: string };
3. InputField Component
Purpose
A reusable input field component that supports multiple types (text and number), provides validation, and includes robust error handling for invalid inputs and required fields.

Key Features
Dynamically validates input values based on type.
Displays error messages for validation or when a required field is left empty.
Supports custom error messages through props.
Key Methods
handleChange: Validates user input based on the specified type (text or number) and updates the parent component.
handleBlur: Checks for required fields and sets appropriate error messages.
TypeScript Techniques
Union Types: Ensures the type and value properties are constrained to specific valid options.
typescript
Copy code
type InputType = 'text' | 'number';
Type Guards: Differentiates between string and number values to ensure accurate validation.
typescript
Copy code
const isString = (val: unknown): val is string => typeof val === 'string';
const isNumber = (val: unknown): val is number => typeof val === 'number';
Custom Error Types:
typescript
Copy code
type InputError =
  | { type: 'required'; message: string }
  | { type: 'validation'; message: string };
Example Usage
Button Component
tsx
Copy code
<Button
  value="Submit"
  onClick={(value) => console.log(value)}
  disabled
  error={{ type: 'disabled', message: 'Button is currently disabled' }}
/>
List Component
tsx
Copy code
<List
  items={['Apple', 'Banana', 'Cherry']}
  renderItem={(item) => <span>{item}</span>}
  isReadonly={false}
  error={{ type: 'empty', message: 'No items found' }}
/>
InputField Component
tsx
Copy code
<InputField
  type="text"
  value=""
  onChange={(value) => console.log(value)}
  placeholder="Enter your name"
  required
  error={{ type: 'required', message: 'This field is required' }}
/>
TypeScript Techniques Summary
Technique	Description	Components Applied
Generics	Enables components to work with any type while maintaining type safety.	Button, List
Union Types	Combines multiple valid types into a single type for props or error handling.	Button, InputField, List
Intersection Types	Combines properties of multiple types to define complex props or error structures.	InputField, List
Type Guards	Implements runtime checks for distinguishing between different types (string, number).	InputField
Custom Error Types	Defines reusable and extensible error structures for handling various error scenarios.	Button, List, InputField
Mapped Types	Configures specific properties like readonly for restricted states.	List
Conclusion
These components demonstrate how to build reusable and robust UI components with TypeScript, emphasizing type safety, flexibility, and clear error handling. They can be easily extended and integrated into larger applications while providing clear feedback and maintaining maintainability.