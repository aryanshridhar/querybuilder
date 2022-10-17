import 'react-dropdown/style.css';
import '../styles/FieldDropdownBar.css';

import Dropdown, { Option } from 'react-dropdown';
import { conditionItems, criteriaItems, fieldItems } from '../constants/dropdown';
import { useDispatch, useSelector } from 'react-redux';

import { DropDownValues } from '../types/redux/rule';
import { RootState } from '../redux/store';
import { change } from '../redux/slices/query';
import { updateDropdownValue } from '../redux/slices/rule';
import { useEffect } from 'react';

type FieldDropdownBarProps = {
  parentFieldIndex: number;
  itemIndex: number;
  dropdownItems: DropDownValues;
};

function FieldDropdownBar(props: FieldDropdownBarProps) {
  const { parentFieldIndex, itemIndex, dropdownItems } = props;

  const state = useSelector((state: RootState) => state.field);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(change(state));
  }, [
    state[parentFieldIndex].children[itemIndex].condition,
    state[parentFieldIndex].children[itemIndex].criteria,
    state[parentFieldIndex].children[itemIndex].field,
  ]);

  const event = (type: string, val: Option) => {
    dispatch(
      updateDropdownValue({
        type,
        index: [parentFieldIndex, itemIndex],
        data: { [type]: val.value },
      })
    );
  };

  const onChangeField = (val: Option) => {
    return event('field', val);
  };
  const onChangeCondition = (val: Option) => {
    return event('condition', val);
  };
  const onChangeCriteria = (val: Option) => {
    return event('criteria', val);
  };

  return (
    <div className='flex flex-row justify-between bg-dark rounded-sm pl-4 pr-4 pt-2'>
      <div className='field-dropdown'>
        <label className='dropdown-label'>Field</label>
        <Dropdown
          className='dropdown-field'
          value={dropdownItems.field}
          options={fieldItems}
          onChange={onChangeField}
          placeholder='Select field'
        />
      </div>
      <div className='field-dropdown'>
        <label className='dropdown-label'>Condition</label>
        <Dropdown
          className='dropdown-field'
          value={dropdownItems.condition}
          options={conditionItems}
          onChange={onChangeCondition}
          placeholder='Select condition'
        />
      </div>
      <div className='field-dropdown'>
        <label className='dropdown-label'>Criteria</label>
        <Dropdown
          className='dropdown-field'
          value={dropdownItems.criteria}
          options={criteriaItems}
          onChange={onChangeCriteria}
          placeholder='Select criteria'
        />
      </div>
    </div>
  );
}

export default FieldDropdownBar;
