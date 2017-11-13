import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { asReduxStore, connectReduxDevtools } from 'mst-middlewares';
import * as remotedev from 'remotedev';
import './index.css';
import App from './App';
import storeFactory from './models';
import registerServiceWorker from './registerServiceWorker';

const initialState = {
  activeVideo: '',
  highlightedVideo: '',
}

remotedev.start({ port: 8000 });

const mstStore = storeFactory.create(initialState);
const store = asReduxStore(mstStore);
console.log(remotedev);
connectReduxDevtools(remotedev, mstStore);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
