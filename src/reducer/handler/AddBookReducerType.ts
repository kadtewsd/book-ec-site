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
        const adding = action as IAddingToCart;
        const count = state.cart.filter(item => item.book.id === adding.isbn).length;
        if (count !== 0) {
            return {cart: state.cart};
        }
        const book = getBooks().filter(x => x.isbn === adding.isbn);
        return {cart: [... [new CartDetail(book[0], 1)], ... state.cart]}
    }
}

export default AddBookReducerType;