import { Conjunction, Rule } from '../rule';

export type DropDownValues = Omit<Rule, 'type'>;

export interface DropDownParams {
  type: string;
  index: [number, number];
  data: DropDownValues;
}

export interface ConjunctionParams {
  index: number;
  conjunction: Conjunction;
}
