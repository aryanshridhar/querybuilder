import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FieldGroup } from '../../types/rule';
import { DropDownParams, ConjunctionParams } from '../../types/redux/rule';
import { initialRule, initialRuleGroup } from '../../constants/field';

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

const fieldStore = createSlice({
  name: 'query',
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
    addRule: (state, action: PayloadAction<{ index: number }>) => {
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
  },
});

export const { toggleConjunction, updateDropdownValue, addRuleGroup, addRule } = fieldStore.actions;
export default fieldStore.reducer;
