import {createStore,applyMiddleware,combineReducers,compose} from 'redux';
import rootReducer from './Reducers/RootReducer'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middleware = applyMiddleware(thunk,logger);
const store = createStore(
    rootReducer,
    {},    
    compose(middleware)
)
export default store;