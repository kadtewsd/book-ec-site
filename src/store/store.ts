import { combineReducers, createStore } from 'redux';
import { ICartState } from '../reducer/BookActionDispatcher';
import merchandice from '../reducer/bookReducer';

export default createStore(
    /**
     * reducer を merchandice という名前で登録
     */
    combineReducers({
        merchandice,
    })
)

/**
 * reducer の第一引数の型で、store に登録した名前のプロパティを作る。
 */
export interface IMerchandice {
    merchandice: ICartState
}
