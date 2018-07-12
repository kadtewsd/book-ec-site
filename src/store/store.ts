import createHistory from "history/createBrowserHistory";
import {
    routerMiddleware,
    routerReducer,
  } from "react-router-redux";
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { ICartState } from '../reducer/BookActionDispatcher';
import merchandice from '../reducer/bookReducer';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);
const s = createStore(
    /**
     * reducer を merchandice という名前で登録
     */
    combineReducers({
        merchandice,
        router: routerReducer
    }),
    applyMiddleware(middleware)
)
export default function store() {
    return s;
}

/**
 * reducer の第一引数の型で、store に登録した名前のプロパティを作る。
 */
export interface IMerchandice {
    merchandice: ICartState
}
