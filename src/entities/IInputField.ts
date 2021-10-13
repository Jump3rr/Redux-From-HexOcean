export interface IInputField {
  input: string;
  type: string;
  meta: {
    touched: string;
    error: string;
    warning: string;
  };
  placeholder?: string;
  step?: string;
  min?: string;
  max?: string;
  children?: any;
}
