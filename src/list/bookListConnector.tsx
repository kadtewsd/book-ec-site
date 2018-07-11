import { connect, } from 'react-redux';
import { Dispatch } from 'redux';
import { BookActionDispatcher, IBookAction } from '../reducer/BookActionDispatcher';
// import store, { getBooks } from '../store/store';
import store, { IMerchandice } from '../store/store';
import BookList from './BookList';

// tslint:disable:no-console
store.subscribe(() => console.log('subscribe'));

// const mapStateToProp = () => ({ books: getBooks() });
const mapStateToProp = (state: IMerchandice) => ({ books: state.merchandice.books });
const mapDispathToProp = (dispatch: Dispatch<IBookAction>) => {
    return { cartAction: new BookActionDispatcher(dispatch) }
};
export default connect(mapStateToProp, mapDispathToProp)(BookList);