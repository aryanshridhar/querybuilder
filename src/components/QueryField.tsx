import '../styles/QueryField.css';

import { RootState } from '../redux/store';
import { useRef } from 'react';
import { useSelector } from 'react-redux';

function QueryField() {
  const query = useSelector((state: RootState) => state.query);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleClick = () => {
    buttonRef.current?.classList.add('hidden-btn');
  };
  return (
    <>
      <div className='flex flex-row justify-between'>
        <div className='query-field w-full'>
          <span>
            <b>Query: </b>
            {query}
          </span>
        </div>
        <div className='pl-2 self-center'>
          <button ref={buttonRef} onClick={handleClick} className='more-btn'>
            More
          </button>
        </div>
      </div>
    </>
  );
}

export default QueryField;
