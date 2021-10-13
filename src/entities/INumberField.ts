export interface INumberField {
  name: string;
  label: string;
  type: string;
  step?: string;
  min?: string;
  max?: string;
  parse?: (newValue: string) => number;
}
