import CartDetail from '../domain/CartDetail';
import { IBookAction, ICartState, } from './BookActionDispatcher'

/**
 * enum does not support extended enum in Java 
 */
export enum BookReducerHanlerType {
    INITIAL,
    SHOW,
    ADD,
    CHANGE,
}
export interface IHandleBookReducer {
    toString(): string
    handle(state: ICartState, action: IBookAction): {cart: CartDetail[]}
}

const initialState: ICartState =  {cart: []}
/**
 * reducer です。
 * @param state 状態を引数に受け取ります。 
 * @param action 状態に対するアクションの指示を受け取ります。
 */
const bookReducer = (state: ICartState = initialState, action: IBookAction) => {
    return action.type.toString().indexOf('redux') !== -1 ? state : action.type.handle(state, action);
}
export default bookReducer;