import '../styles/Modal.css';

import FieldGroup from './FieldGroup';
import QueryModal from './QueryModal';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

function Modal() {
  const query = useSelector((state: RootState) => state.query);
  const rule = useSelector((state: RootState) => state.rule);

  const handleFinishClick = () => {
    alert(`Readable ouput - ${query}\nand check console for the object!`);
    console.log(rule);
  };

  return (
    <div className='modal relative flex flex-col h-[75vh] w-[54rem]'>
      <QueryModal />
      <FieldGroup />

      <div className='px-4 py-4 flex-1 items-end flex justify-between'>
        <div>
          <button className='footer-button-back hover:bg-indigo-500 py-2 px-4 text-white rounded-md font-medium text-xs bg-grey-100'>
            Back
          </button>
        </div>
        <div>
          <button
            onClick={handleFinishClick}
            className='footer-button-finish hover:bg-indigo-500 py-2 px-4 text-white rounded-md font-medium text-xs'
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
