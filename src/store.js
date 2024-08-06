import { appReducer } from './reducer';
import { createStore } from 'redux';

export const store = createStore(appReducer);

store.dispatch({ type: 'Initialization' });

// export const store = createStore(a)
