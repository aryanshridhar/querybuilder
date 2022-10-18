import '../styles/QueryField.css';

import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function QueryField() {
  const query = useSelector((state: RootState) => state.query);
  const [isButtonClicked, toggleClick] = useState<boolean>(false);

  const handleClick = () => {
    toggleClick((prev) => !prev);
  };

  return (
    <div className='flex flex-row justify-between w-[95%]'>
      <div className='text-xs px-2 py-2 mt-1 rounded-t rounded-b w-[95%] query-field query-field-width'>
        <p className={isButtonClicked ? 'w-full' : 'truncate w-full'}>
          <b>Query: </b>
          {query}
        </p>
      </div>
      <div className='pl-2 self-center'>
        <button onClick={handleClick} className='text-sm'>
          {isButtonClicked ? 'Less' : 'More'}
        </button>
      </div>
    </div>
  );
}

export default QueryField;
