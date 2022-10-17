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
        if (index != 0) {
          if (queryString !== '') {
            queryString += ` ${ConjunctionEnum[ruleGroup.conjunction]} `;
          }
        }
        if (this.isValidRule(rule)) {
          const validRule = rule as Required<DropDownValues>;
          queryString += `"(field.${validRule.field}) ${ConditionEnum[validRule.condition]} \\"${
            rule.criteria || ''
          }"\\"`;
        }
      });
      queryString += ' ';
    });

    if (queryString.slice(-4) == '&&  ' || queryString.slice(-4) == '||  ') {
      queryString = queryString.slice(0, -4);
    }

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
