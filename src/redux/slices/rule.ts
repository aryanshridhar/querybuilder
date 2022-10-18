import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FieldGroup } from '../../types/rule';
import {
  DropDownParams,
  ConjunctionParams,
  AddRuleParams,
  DeleteRuleParams,
} from '../../types/redux/rule';
import { initialRule, initialRuleGroup } from '../../constants/redux/rule';

const initialState: FieldGroup = [
  {
    children: [
      {
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
      const { index, conjunction } = action.payload;
      state[index] = { ...state[index], conjunction: conjunction };
      return state;
    },
    addRuleGroup: (state) => {
      state.push(initialRuleGroup);
      return state;
    },
    addRule: (state, action: PayloadAction<AddRuleParams>) => {
      const index = action.payload.index;
      state[index].children.push(initialRule);
      return state;
    },
    updateDropdownValue: (state, action: PayloadAction<DropDownParams>) => {
      const data = action.payload.data;
      const [parentIndex, itemIndex] = action.payload.index;

      switch (action.payload.type) {
        case 'field':
          state[parentIndex].children[itemIndex].field = data.field;
          return state;
        case 'condition':
          state[parentIndex].children[itemIndex].condition = data.condition;
          return state;
        case 'criteria':
          state[parentIndex].children[itemIndex].criteria = data.criteria;
          return state;

        default:
          return state;
      }
    },
    deleteRule: (state, action: PayloadAction<DeleteRuleParams>) => {
      const [parentIndex, itemIndex] = action.payload.index;
      state[parentIndex].children.splice(itemIndex, 1);
      return state;
    },
  },
});

export const { deleteRule, toggleConjunction, updateDropdownValue, addRuleGroup, addRule } =
  ruleStore.actions;
export default ruleStore.reducer;
