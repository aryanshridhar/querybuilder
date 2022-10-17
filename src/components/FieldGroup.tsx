import '../styles/FieldGroup.css';

import { useDispatch, useSelector } from 'react-redux';

import Field from './Field';
import { RootState } from '../redux/store';
import { addRuleGroup } from '../redux/slices/rule';

function FieldGroup() {
  const ruleGroup = useSelector((state: RootState) => state.field);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addRuleGroup());
  };
  return (
    <div className='field-group flex flex-col'>
      <div className='field'>
        {/* TODO(aryanshridhar): Not render with index as key */}
        {ruleGroup.map((val, index) => {
          return <Field itemIndex={index} fieldItems={val} key={index} />;
        })}
      </div>
      <div className='mt-5'>
        <button
          onClick={handleClick}
          className='footer-button footer-button-finish hover:bg-indigo-500 py-2 px-4 text-white rounded-md font-medium'
        >
          + Add new group filter
        </button>
      </div>
    </div>
  );
}

export default FieldGroup;
