import { ConditionEnum, ConjunctionEnum, FieldGroup, Rule, RuleGroup } from '../types/rule';

import { DropDownValues } from '../types/redux/rule';

interface RootQueryBuilder {
  readonly getQueryString: string;
}

class QueryBuilder implements RootQueryBuilder {
  private queryString = '';
  constructor(item: FieldGroup) {
    this.queryString = this.generateQueryString(item);
  }

  get getQueryString(): string {
    return this.queryString;
  }

  private generateQueryString(item: FieldGroup): string {
    let queryString = '';
    item.forEach((ruleGroup: RuleGroup) => {
      ruleGroup.children.forEach((rule: Rule, index) => {
        if (this.isValidRule(rule)) {
          const validRule = rule as Required<DropDownValues>;
          queryString += `"(field.${validRule.field}) ${ConditionEnum[validRule.condition]} \\"${
            rule.criteria || ''
          }"\\"`;
        }
        // Future check to decide if an conjunction should be added or not
        if (index !== ruleGroup.children.length - 1) {
          if (this.isValidRule(ruleGroup.children[index + 1]) && queryString !== '') {
            queryString += ` ${ConjunctionEnum[ruleGroup.conjunction]} `;
          }
        }
      });

      // TODO: Discuss alternatives!
      queryString += ' ';
    });

    return queryString;
  }

  private isValidRule(rule: Rule) {
    if (rule.condition === undefined || rule.criteria === undefined || rule.field === undefined) {
      return false;
    }
    return true;
  }
}

export { QueryBuilder };
