import '../styles/QueryModal.css';

import QueryField from './QueryField';

function QueryModal() {
  return (
    <div className='query-modal rounded-tl-md rounded-tr-md'>
      <div className='flex justify-between'>
        <div>
          <p className='text-base font-normal'>Build your query</p>
        </div>
      </div>
      <QueryField />
    </div>
  );
}

export default QueryModal;
