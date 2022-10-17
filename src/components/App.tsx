import '../styles/App.css';

import Modal from './Modal';
import { Provider } from 'react-redux';
import store from '../redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className='flex items-center justify-center h-screen'>
        <Modal />
      </div>
    </Provider>
  );
}

export default App;
