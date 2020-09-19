import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer as root} from './root-reducer'
import thunk from 'redux-thunk';

const devTools = process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null

let enhancers = applyMiddleware(thunk);
if(devTools) enhancers = compose(applyMiddleware(thunk), devTools)

export const store = createStore(root, enhancers);
