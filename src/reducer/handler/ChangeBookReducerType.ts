import { Book } from '../../domain/Book'
import { ICartState, } from '../BookActionDispatcher'
import { IBookAction } from '../BookActionDispatcher'
import { BookReducerHanlerType } from '../bookReducer'
import { IHandleBookReducer } from '../bookReducer'

class ChangeBookReducerType implements IHandleBookReducer {
    constructor(private asin: string, readonly quantity: number) { }
    public toString() {
        return BookReducerHanlerType.CHANGE.toString();
    }
    public handle(state: ICartState, action: IBookAction): { cart: Book[] } {
        if (this.quantity === 0) {
            return this.removeTheItem(state);
        }
        const results = state.cart.filter(book => book.isbn === this.asin);
        const func = this.quantity < results.length ? (index: number, array: Book[]) => array.splice(index, 1) :
            (index: number, array: Book[]) => array.push(array[index]);
        const cart = this.addOrRemove(results, func);
        // filter の戻り値は配列なので book は配列として生成されている。そのため、スプレッドを book にも使う。
        return { cart: [... state.cart.filter((book) => cart.find((book1) => book.isbn !== book1.isbn)), ...cart] }
    }

    private removeTheItem(state: ICartState) {
            const books: Book[] = [];
            state.cart.forEach((book, index, array) => {
                if (book.isbn !== this.asin) {
                   books.push(book) ;
                }
            })
            return {cart: books}
    }

    private addOrRemove(results: Book[], func: (index: number, array: Book[]) => any): Book[] {
        if (this.quantity === results.length) {
            return results;
        }
        const loopCount = this.quantity < results.length ?
            this.quantity - results.length : this.quantity - results.length;

        for (let i = 0; i < loopCount; i++) {
            func(i, results);
        }
        return results
    }
}

export default ChangeBookReducerType;