export interface IInputField {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  component?: string;
  step?: string;
  min?: string;
  max?: string;
  parse?: (newValue: string) => number;
}
