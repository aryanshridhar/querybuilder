import '../styles/RuleGroup.css';

import { Conjunction, RuleGroup as RuleGroupType } from '../types/rule';
import { addRule, toggleConjunction } from '../redux/slices/rule';
import { useDispatch, useSelector } from 'react-redux';

import FieldDropdownBar from './Rule';
import { RootState } from '../redux/store';
import { change } from '../redux/slices/query';
import logo from '../assets/info-icon.png';
import { useEffect } from 'react';

interface FieldProps {
  fieldItems: RuleGroupType;
  itemIndex: number;
}

function RuleGroup(props: FieldProps): JSX.Element {
  const { fieldItems, itemIndex } = props;

  const state = useSelector((state: RootState) => state.rule);
  const { conjunction } = state[itemIndex];
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addRule({ index: itemIndex }));
  };
  const activeButtonStyle = (condition: Conjunction) => {
    if (condition === conjunction) {
      return 'active';
    }
  };
  const handleConjunctionClick = (conjunction: Conjunction) => {
    dispatch(
      toggleConjunction({
        index: itemIndex,
        conjunction,
      })
    );
  };

  useEffect(() => {
    dispatch(change(state));
  }, [state[itemIndex].conjunction]);

  const renderConjunctionButton = (): JSX.Element | null => {
    if (fieldItems.children.length < 2) {
      return null;
    }

    return (
      <div className='inline-flex pl-4 pt-3'>
        <button
          className={`conjunction-btn text-xs btn-l rounded-l-sm py-1 px-2 border cursor-pointer ${activeButtonStyle(
            'AND'
          )}`}
          onClick={() => handleConjunctionClick('AND')}
        >
          AND
        </button>
        <button
          onClick={() => handleConjunctionClick('OR')}
          className={`conjunction-btn text-xs py-1 px-2 rounded-r ${activeButtonStyle('OR')}`}
        >
          OR
        </button>
        <div>
          <img className='ml-1 mt-2 opacity-90' height={15} width={15} src={logo}></img>
        </div>
      </div>
    );
  };

  return (
    <div className='field-box border mb-5'>
      <div className='flex flex-col'>
        {renderConjunctionButton()}
        {fieldItems.children.map((value, index) => {
          return (
            <FieldDropdownBar
              parentFieldIndex={itemIndex}
              itemIndex={index}
              dropdownItems={value}
              key={index}
              isRemovable={index !== 0}
            />
          );
        })}
        <div className='p-4'>
          <button
            onClick={handleClick}
            className='text-xs footer-button-finish hover:bg-indigo-500 py-2 px-4 text-white rounded-md font-medium'
          >
            + Add filter
          </button>
        </div>
      </div>
    </div>
  );
}

export default RuleGroup;
