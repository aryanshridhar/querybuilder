import { Conjunction, Rule } from '../rule';

export type DropDownValues = Omit<Rule, 'type' | 'id'>;

export interface DropDownParams {
  type: string;
  id: [string, string];
  data: DropDownValues;
}

export interface ConjunctionParams {
  id: string;
  conjunction: Conjunction;
}

export interface AddRuleParams {
  id: string;
}

export interface DeleteRuleParams {
  id: [string, string];
}
