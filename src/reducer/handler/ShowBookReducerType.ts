import CartDetail from '../../domain/CartDetail';
import { ICartState, } from '../BookActionDispatcher'
import { IBookAction } from '../BookActionDispatcher'
import { BookReducerHanlerType } from '../bookReducer'
import { IHandleBookReducer } from '../bookReducer'


class ShowBookReducerType implements IHandleBookReducer {
    public toString(): string {
        return BookReducerHanlerType.SHOW.toString();
    }
    public handle(state: ICartState, action: IBookAction): {cart: CartDetail[]} {
        return {cart: state.cart};
    }
}

export default ShowBookReducerType;