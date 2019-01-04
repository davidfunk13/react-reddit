import {createStore, compose, applyMiddleware} from 'redux';
import {persistStore, persistCombineReducers} from "redux-persist";
import rootReducer from './reducers/rootReducer';
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
import storage from "redux-persist/es/storage";

const loggerMiddleware = createLogger({
    collapsed: false,
    duration: true,
    diff: true
});

const middleware = [
    thunk,
    loggerMiddleware
];

const configureStore = compose(applyMiddleware(...middleware))(createStore);

const rootPersistConfig = {
    key: "root",
    storage: storage
};

const combinedReducer = persistCombineReducers(rootPersistConfig, rootReducer);

const createAppStore = () => {
    let store = configureStore(combinedReducer);
    let persistor = persistStore(store);
    return{
        persistor,
        store
    }
};
export default createAppStore;