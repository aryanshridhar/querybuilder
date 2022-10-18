import '../styles/QueryModal.css';

import QueryField from './QueryField';
import closeIcon from '../assets/close-icon.png';

function QueryModal() {
  return (
    <div className='query-modal rounded-tl-md rounded-tr-md'>
      <div className='flex justify-between'>
        <div>
          <p className='text-base font-normal'>Build your query</p>
        </div>
        <div>
          <img className='cursor-pointer' width={20} height={20} src={closeIcon}></img>
        </div>
      </div>
      <QueryField />
    </div>
  );
}

export default QueryModal;
