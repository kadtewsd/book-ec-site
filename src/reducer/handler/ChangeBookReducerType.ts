import CartDetail from '../../domain/CartDetail';
import { ICartState, } from '../BookActionDispatcher'
import { IBookAction } from '../BookActionDispatcher'
import { BookReducerHanlerType } from '../bookReducer'
import { IHandleBookReducer } from '../bookReducer'

class ChangeBookReducerType implements IHandleBookReducer {
    constructor(private asin: string, readonly quantity: number) { }
    public toString() {
        return BookReducerHanlerType.CHANGE.toString();
    }
    public handle(state: ICartState, action: IBookAction): {cart: CartDetail[]} {
        if (this.quantity === 0) {
            return {cart: this.removeTheItem(state)};
        }
        for (const item of state.cart) {
            if (item.book.id === this.asin) {
                item.newQuantity(this.quantity);
                break;
            }
        }
        return {cart: state.cart};
    }

    private removeTheItem(state: ICartState): CartDetail[] {
        const books: CartDetail[] = [];
        state.cart.forEach((book, index, array) => {
            if (book.book.id !== this.asin) {
                books.push(book);
            }
        })
        return books;
    }
}

export default ChangeBookReducerType;