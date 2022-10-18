import { Rule, RuleGroup } from '../../types/rule';

const initialRule: Rule = {
  type: 'rule',
};

const initialRuleGroup: RuleGroup = {
  children: [
    {
      type: 'rule',
    },
  ],
  conjunction: 'AND',
  type: 'rule_group',
};

export { initialRule, initialRuleGroup };
