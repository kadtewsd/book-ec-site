import { Action } from 'redux';
import { Book } from '../domain/Book';
import { BookReducerType } from './bookReducer';

export interface IBookAction extends Action {
    isbn: string
    type: BookReducerType,
    books: Book[],
};
export type IAddingToCart = IBookAction;
const addingAction = (asin: string): IAddingToCart => {
    return {
        books: [],
        isbn: asin,
        type: BookReducerType.ADD,
    }
};

export class BookActionDispatcher {
    constructor(private dispatch: (action: IBookAction) => void) { }
    public addBook2Cart(isbn: string) {
        this.dispatch(addingAction(isbn));
    }
}