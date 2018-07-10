import { connect, } from 'react-redux';
import { Dispatch } from 'redux';
import { Book } from '../domain/Book';
import { BookActionDispatcher } from '../reducer/BookActionDispatcher';
import store from '../store/store';
import BookList from './BookList';

// tslint:disable:no-console
store.subscribe(() => console.log('subscribe'));

interface IBookReducerCart {
    cart: Book[]
}
const mapDispathToProp = (dispatch: Dispatch<IBookReducerCart>) => (new BookActionDispatcher(dispatch));
export default connect(null, mapDispathToProp)(BookList);