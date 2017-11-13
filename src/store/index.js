import { createStore } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import videos from '../reducers';
let store = createStore(videos, devToolsEnhancer({ port: 8000 }));

export default store;