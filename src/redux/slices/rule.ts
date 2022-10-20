import {
  AddRuleParams,
  ConjunctionParams,
  DeleteRuleParams,
  DropDownParams,
} from '../../types/redux/rule';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { initialRule, initialRuleGroup } from '../../constants/redux/rule';

import { FieldGroup } from '../../types/rule';
import { nanoid } from 'nanoid';

const initialState: FieldGroup = [
  {
    id: nanoid(),
    children: [
      {
        id: nanoid(),
        type: 'rule',
      },
    ],
    conjunction: 'AND',
    type: 'rule_group',
  },
];

const ruleStore = createSlice({
  name: 'rule',
  initialState,
  reducers: {
    toggleConjunction: (state, action: PayloadAction<ConjunctionParams>) => {
      const { id, conjunction } = action.payload;
      const ruleGroupId = state.findIndex((rule) => rule.id === id);
      state[ruleGroupId].conjunction = conjunction;

      return state;
    },

    addRuleGroup: (state) => {
      state.push({
        ...initialRuleGroup,
        id: nanoid(),
        children: [{ ...initialRule, id: nanoid() }],
      });
      return state;
    },

    addRule: (state, action: PayloadAction<AddRuleParams>) => {
      const id = action.payload.id;
      const index = state.findIndex((rule) => rule.id === id);
      state[index].children.push({ ...initialRule, id: nanoid() });

      return state;
    },

    updateDropdownValue: (state, action: PayloadAction<DropDownParams>) => {
      const data = action.payload.data;
      const [ruleGroupId, ruleId] = action.payload.id;
      const ruleGroupIdindex = state.findIndex((rule) => rule.id === ruleGroupId);
      const ruleIdIndex = state[ruleGroupIdindex].children.findIndex((rule) => rule.id === ruleId);

      switch (action.payload.type) {
        case 'field':
          state[ruleGroupIdindex].children[ruleIdIndex].field = data.field;
          return state;
        case 'condition':
          state[ruleGroupIdindex].children[ruleIdIndex].condition = data.condition;
          return state;
        case 'criteria':
          state[ruleGroupIdindex].children[ruleIdIndex].criteria = data.criteria;
          return state;

        default:
          return state;
      }
    },

    deleteRule: (state, action: PayloadAction<DeleteRuleParams>) => {
      const [ruleGroupId, ruleId] = action.payload.id;
      const ruleGroupIdindex = state.findIndex((rule) => rule.id === ruleGroupId);
      const ruleIdIndex = state[ruleGroupIdindex].children.findIndex((rule) => rule.id === ruleId);

      state[ruleGroupIdindex].children.splice(ruleIdIndex, 1);
      return state;
    },
  },
});

export const { deleteRule, toggleConjunction, updateDropdownValue, addRuleGroup, addRule } =
  ruleStore.actions;
export default ruleStore.reducer;
