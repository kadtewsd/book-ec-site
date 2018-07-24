import { Book } from '../../domain/Book'
import { ICartState, } from '../BookActionDispatcher'
import { IBookAction } from '../BookActionDispatcher'
import { BookReducerHanlerType } from '../bookReducer'
import { IHandleBookReducer } from '../bookReducer'


class ShowBookReducerType implements IHandleBookReducer {
    public toString(): string {
        return BookReducerHanlerType.SHOW.toString();
    }
    public handle(state: ICartState, action: IBookAction): { cart: Book[] } {
        return { cart: state.cart };
    }
}

export default ShowBookReducerType;