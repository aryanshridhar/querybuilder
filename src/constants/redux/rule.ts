import { Rule, RuleGroup } from '../../types/rule';

const initialRule: Omit<Rule, 'id'> = {
  type: 'rule',
};

const initialRuleGroup: Omit<RuleGroup, 'id' | 'children'> = {
  conjunction: 'AND',
  type: 'rule_group',
};

export { initialRule, initialRuleGroup };
