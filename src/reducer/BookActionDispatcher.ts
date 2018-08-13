import { Action, Dispatch } from 'redux';
import CartDetail from '../domain/CartDetail';
import AddBookReducerType from '../reducer/handler/AddBookReducerType'
import ChangeBookReducerType from '../reducer/handler/ChangeBookReducerType'
import ShowBookReducerType from '../reducer/handler/ShowBookReducerType'
import { IHandleBookReducer } from './bookReducer';

export interface ICartState {
    cart: CartDetail[]
}

export interface IBookAction extends Action {
    type: IHandleBookReducer,
};
export interface IAddingToCart extends IBookAction {
    isbn: string
}

export interface IChangingToCart extends IBookAction {
    isbn: string
}
const addingAction = (asin: string): IAddingToCart => {
    return {
        isbn: asin,
        type: new AddBookReducerType(),
    }
};

const changingAction = (asin: string, changed: number): IChangingToCart => {
    return {
        isbn: asin,
        type: new ChangeBookReducerType(asin, changed),
    }
};

export type IShowigCart = IBookAction;

const showingAction = (): IShowigCart => {
    return {
        type: new ShowBookReducerType(),
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
    public changeCart(isbn: string, quantity: number) {
        return this.dispatch(changingAction(isbn, quantity));
    }
}