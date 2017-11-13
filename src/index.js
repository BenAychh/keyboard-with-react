import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { asReduxStore, connectReduxDevtools } from 'mst-middlewares';
import * as remotedev from 'remotedev';
import './index.css';
import App from './App';
import storeFactory from './models';
import registerServiceWorker from './registerServiceWorker';
import videos from './fakeData';

const initialState = {
  activeVideo: '',
  highlightedVideo: '',
  videos,
}

remotedev.start({ port: 8000 });

const store = storeFactory.create(initialState);
connectReduxDevtools(remotedev, store);

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);
registerServiceWorker();
