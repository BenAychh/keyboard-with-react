import { createStore } from 'redux';
import videos from '../reducers';
let store = createStore(videos);

export default store;