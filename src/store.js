import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';

const composeEnhancer = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(reducers, {}, composeEnhancer);

export default store;
