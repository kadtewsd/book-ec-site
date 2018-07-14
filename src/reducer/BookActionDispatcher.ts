import { Action, Dispatch } from 'redux';
import { Book } from '../domain/Book';
import { BookReducerType } from './bookReducer';

export interface ICartState {
    cart: Book[],
}
export interface IBookAction extends Action {
    type: BookReducerType,
};
export interface IAddingToCart extends IBookAction {
    isbn: string
}
const addingAction = (asin: string): IAddingToCart => {
    return {
        isbn: asin,
        type: BookReducerType.ADD,
    }
};

export type IShowigCart = IBookAction;

const showingAction = (): IShowigCart => {
    return {
        type: BookReducerType.SHOW,
    }
}

export class BookActionDispatcher {
    constructor(private dispatch: Dispatch<IBookAction>) {
    }
    public addBook2Cart(isbn: string) {
        this.dispatch(addingAction(isbn));
    }
    public showCart() {
        return this.dispatch(showingAction());
    }
}