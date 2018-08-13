import CartDetail from '../../domain/CartDetail';
import { getBooks } from '../../list/bookListConnector'
import { ICartState, } from '../BookActionDispatcher'
import { IBookAction } from '../BookActionDispatcher'
import { IAddingToCart } from '../BookActionDispatcher'
import { BookReducerHanlerType } from '../bookReducer'
import { IHandleBookReducer } from '../bookReducer'

class AddBookReducerType implements IHandleBookReducer {
    public toString() {
        return BookReducerHanlerType.ADD.toString();
    }
    public handle(state: ICartState, action: IBookAction): {cart: CartDetail[]} {
        const book = getBooks().filter(x => x.isbn === (action as IAddingToCart).isbn);
        return {cart: [... [new CartDetail(book[0], 1)], ... state.cart]}
    }
}

export default AddBookReducerType;