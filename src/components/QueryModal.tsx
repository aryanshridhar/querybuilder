import '../styles/QueryModal.css';

import QueryField from './QueryField';

function QueryModal() {
  return (
    <div className='query-modal'>
      <div className='flex justify-between'>
        <div>
          <p className='querytext'>Build your query</p>
        </div>
      </div>
      <QueryField />
    </div>
  );
}

export default QueryModal;
