import { Action, Dispatch } from 'redux';
import { Book } from '../domain/Book';
import { BookReducerType } from './bookReducer';

export interface ICartState {
    cart: Book[],
}
export interface IBookAction extends Action {
    isbn: string
    type: BookReducerType,
};
export type IAddingToCart = IBookAction;
const addingAction = (asin: string): IAddingToCart => {
    return {
        isbn: asin,
        type: BookReducerType.ADD,
    }
};

export class BookActionDispatcher {
    constructor(private dispatch: Dispatch<IBookAction>) {
    }
    public addBook2Cart(isbn: string) {
        this.dispatch(addingAction(isbn));
    }
}