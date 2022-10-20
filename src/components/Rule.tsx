import 'react-dropdown/style.css';
import '../styles/Rule.css';

import Dropdown, { Option } from 'react-dropdown';
import { RuleGroup, Rule as RuleType } from '../types/rule';
import { conditionItems, fieldItems, mappedFieldToCriteria } from '../constants/components/rule';
import { deleteRule, updateDropdownValue } from '../redux/slices/rule';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../redux/store';
import { change } from '../redux/slices/query';
import deleteIcon from '../assets/delete-icon.png';
import { useEffect, useMemo, useState } from 'react';

interface RuleProps {
  ruleGroup: RuleGroup;
  rule: RuleType;
  isRemovable: boolean;
}

function Rule(props: RuleProps) {
  const { rule, ruleGroup, isRemovable } = props;
  const { id: ruleGroupId } = ruleGroup;

  const state = useSelector((state: RootState) => state.rule);
  const [selectedField, setSelectedField] = useState<string>('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(change(state));
  }, [rule.condition, rule.criteria, rule.field, ruleGroup.children.length]);

  const event = (type: string, val: Option) => {
    dispatch(
      updateDropdownValue({
        type,
        id: [ruleGroupId, rule.id],
        data: { [type]: val.value },
      })
    );
  };

  const onChangeField = (val: Option) => {
    setSelectedField(() => val.value);
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
        id: [ruleGroupId, rule.id],
      })
    );
  };
  const criteriaItems = useMemo(() => {
    const item = mappedFieldToCriteria.get(selectedField);
    return item || [];
  }, [selectedField]);

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
            value={rule.field}
            options={fieldItems}
            onChange={onChangeField}
            placeholder='Select field'
          />
        </div>
        <div className='flex-1'>
          <label className='dropdown-label'>Condition</label>
          <Dropdown
            className='dropdown-field'
            value={rule.condition}
            options={conditionItems}
            onChange={onChangeCondition}
            placeholder='Select condition'
          />
        </div>
        <div className='flex-1'>
          <label className='dropdown-label'>Criteria</label>
          <Dropdown
            className='dropdown-field'
            value={selectedField !== '' ? rule.criteria : ''}
            options={selectedField !== '' ? criteriaItems : []}
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
