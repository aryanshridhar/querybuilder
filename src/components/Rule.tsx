import 'react-dropdown/style.css';
import '../styles/Rule.css';

import Dropdown, { Option } from 'react-dropdown';
import { conditionItems, criteriaItems, fieldItems } from '../constants/components/rule';
import { deleteRule, updateDropdownValue } from '../redux/slices/rule';
import { useDispatch, useSelector } from 'react-redux';

import { DropDownValues } from '../types/redux/rule';
import { RootState } from '../redux/store';
import { change } from '../redux/slices/query';
import deleteIcon from '../assets/delete-icon.png';
import { useEffect } from 'react';

interface FieldDropdownBarProps {
  parentFieldIndex: number;
  itemIndex: number;
  dropdownItems: DropDownValues;
  isRemovable: boolean;
}

function Rule(props: FieldDropdownBarProps) {
  const { parentFieldIndex, itemIndex, dropdownItems, isRemovable } = props;

  const state = useSelector((state: RootState) => state.field);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(change(state));
  }, [
    state[parentFieldIndex].children[itemIndex].condition,
    state[parentFieldIndex].children[itemIndex].criteria,
    state[parentFieldIndex].children[itemIndex].field,
    state[parentFieldIndex].children.length,
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
  const handleDeleteRule = () => {
    dispatch(
      deleteRule({
        index: [parentFieldIndex, itemIndex],
      })
    );
  };
  const renderDeleteIcon = (): JSX.Element | null => {
    if (isRemovable) {
      return (
        <img
          onClick={() => handleDeleteRule()}
          className='cursor-pointer delete-img'
          width={35}
          src={deleteIcon}
        ></img>
      );
    }
    return null;
  };

  return (
    <div className='flex flex-row justify-between bg-dark rounded-sm pl-4 pr-4 pt-2'>
      <div className='flex flex-row dropdown-row-1'>
        <div className='flex-1'>
          <label className='dropdown-label'>Field</label>
          <Dropdown
            className='dropdown-field'
            value={dropdownItems.field}
            options={fieldItems}
            onChange={onChangeField}
            placeholder='Select field'
          />
        </div>
        <div className='flex-1'>
          <label className='dropdown-label'>Condition</label>
          <Dropdown
            className='dropdown-field'
            value={dropdownItems.condition}
            options={conditionItems}
            onChange={onChangeCondition}
            placeholder='Select condition'
          />
        </div>
        <div className='flex-1'>
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
      <div className='delete-img-div self-end flex-1'>{renderDeleteIcon()}</div>
    </div>
  );
}

export default Rule;
