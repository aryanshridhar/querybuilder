import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../redux/store';
import RuleGroup from './RuleGroup';
import { addRuleGroup } from '../redux/slices/rule';

function FieldGroup() {
  const ruleGroup = useSelector((state: RootState) => state.rule);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addRuleGroup());
  };

  return (
    <div style={{ flex: 10 }} className='field-group flex flex-col overflow-y-auto mx-8 mt-12'>
      <div className='field'>
        {ruleGroup.map((val) => {
          return <RuleGroup ruleGroup={val} key={val.id} />;
        })}
      </div>
      <div className='mt-5'>
        <button
          onClick={handleClick}
          className='footer-button-finish hover:bg-indigo-500 py-2 px-4 text-white rounded-md font-medium text-xs'
        >
          + Add new group filter
        </button>
      </div>
    </div>
  );
}

export default FieldGroup;
