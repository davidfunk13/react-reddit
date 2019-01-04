import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';


const loggerMiddleware = createLogger({
    collapsed: false,
    duration: true,
    diff: true
});

const middleware = [
    loggerMiddleware,
    thunk
];

const configureStore = compose(applyMiddleware(...middleware))(createStore);

const createAppStore = () => {
    let store = configureStore(rootReducer);
    return store
};
export default createAppStore;