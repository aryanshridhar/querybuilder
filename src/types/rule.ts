export type Field =
  | 'Theme'
  | 'Sub-theme'
  | 'Reason'
  | 'Language'
  | 'Source'
  | 'Rating'
  | 'Time Period'
  | 'Customer ID';

export type Condition =
  | 'Equals'
  | 'Does not equal'
  | 'Like'
  | 'Not like'
  | 'Is Empty'
  | 'Is'
  | 'Is not';

export enum ConditionEnum {
  'Equals' = '==',
  'Does not equal' = '!=',
  'Like' = 'LIKE',
  'Not like' = '!LIKE',
  'Is Empty' = 'IS_NULL',
  'Is' = '===',
  'Is not' = '!==',
}

export enum ConjunctionEnum {
  'AND' = '&&',
  'OR' = '||',
}

export type Criteria = 'Offers' | 'Performance' | 'Platform' | 'Product Feedback';
export type Conjunction = 'AND' | 'OR';

export interface Rule {
  readonly id: string;
  field?: Field;
  condition?: Condition;
  criteria?: Criteria;
  type: 'rule';
}

export interface RuleGroup {
  readonly id: string;
  children: Rule[];
  conjunction: Conjunction;
  type: 'rule_group';
}

export type FieldGroup = Array<RuleGroup>;
