import { Book } from '../../domain/Book'
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
    public handle(state: ICartState, action: IBookAction): { cart: Book[] } {
        const book = getBooks().filter(x => x.isbn === (action as IAddingToCart).isbn);
        // filter の戻り値は配列なので book は配列として生成されている。そのため、スプレッドを book にも使う。
        return { cart: [...state.cart, ...book] }
    }
}

export default AddBookReducerType;