# querybuilder

Enterpret task!

Deployed with gh-pages at - https://aryanshridhar.github.io/querybuilder/

### Building locally - 

* Clone the repo - <pre>git clone https://github.com/aryanshridhar/querybuilder.git && cd querybuilder/</pre>
* Install dependencies - <pre>yarn install</pre>
* Start the localhost server at http://localhost:3000/ with <pre>yarn start</pre>

### Built using - 

* React
* Typescript
* Tailwind

### Data model - 

```ts
export interface Rule {
  field?: Field;
  condition?: Condition;
  criteria?: Criteria;
  type: 'rule';
}

export interface RuleGroup {
  children: Rule[];
  conjunction: Conjunction;
  type: 'rule_group';
}

export type FieldGroup = Array<RuleGroup>;
```
