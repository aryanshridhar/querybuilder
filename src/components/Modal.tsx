import '../styles/Modal.css';

import FieldGroup from './FieldGroup';
import QueryModal from './QueryModal';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

function Modal() {
  const query = useSelector((state: RootState) => state.query);
  const handleFinishClick = () => {
    alert(`Readable ouput - ${query}`);
  };
  return (
    <div className='modal flex flex-col'>
      <QueryModal />
      <FieldGroup />

      <div className='footer items-end flex justify-between'>
        <div>
          <button className='footer-button footer-button-back hover:bg-indigo-500 py-2 px-4 text-white rounded-md font-medium text-sm bg-grey-100'>
            Back
          </button>
        </div>
        <div>
          <button
            onClick={handleFinishClick}
            className='footer-button footer-button-finish hover:bg-indigo-500 py-2 px-4 text-white rounded-md font-medium text-sm'
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
