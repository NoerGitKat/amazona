import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// Import all reducers
import productReducer from "./reducers/product-reducer";

const rootReducer = combineReducers({
  productReducer,
});

const initialState = {};

// Enhances Redux capability: add Chrome tool so browser can visually represent state changes
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Middlewares that modify how Redux works
const middlewares = enhancer(applyMiddleware(thunk));

// The Redux store will contain global state
const store = createStore(rootReducer, initialState, middlewares);

export default store;
