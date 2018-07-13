import { getBooks } from '../list/bookListConnector';
import { IBookAction, ICartState } from './BookActionDispatcher'

export enum BookReducerType {
    INITIAL,
    ADD
}
const initialState: ICartState = { cart: [] };
/**
 * reducer です。
 * @param state 状態を引数に受け取ります。 
 * @param action 状態に対するアクションの指示を受け取ります。
 */
const bookReducer = (state: ICartState = initialState, action: IBookAction) => {
    switch (action.type) {
        case BookReducerType.ADD:
            const book = getBooks().filter(x => x.isbn === action.isbn);
            // filter の戻り値は配列なので book は配列として生成されている。そのため、スプレッドを book にも使う。
            return {cart: [...state.cart, ...book] }
        default:
            return state;
    }

}
export default bookReducer;