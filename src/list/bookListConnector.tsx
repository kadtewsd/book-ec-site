import { connect, } from 'react-redux';
import { Dispatch } from 'redux';
import {Book} from '../domain/Book';
import { BookActionDispatcher, IBookAction } from '../reducer/BookActionDispatcher';
// import store, { getBooks } from '../store/store';
import  store, { IMerchandice } from '../store/store';
import BookList from './BookList';

// tslint:disable:no-console
store.subscribe(() => console.log('subscribe'));

export function getBooks(): Book[] {
    const allBooks: Book[] = [
        new Book("B07FGW6TW2", "パラレル・パラダイス4", "https://images-fe.ssl-images-amazon.com/images/I/51s4VOkmpWL._BG0,0,0,0_FMpng_.jpg", 540),
        new Book("B07DLYYM3F", "冴えない彼女の育て方", "https://images-fe.ssl-images-amazon.com/images/I/51kyGzZXx4L._BG0,0,0,0_FMpng_.jpg", 617),
        new Book("B07F3K8LJL", "僕らはみんな河合荘(10)", "https://images-fe.ssl-images-amazon.com/images/I/51NdY3JI+kL._BG0,0,0,0_FMpng_.jpg", 540),
        new Book("B00J8AATHM", "銃夢 Last Order1", "https://images-fe.ssl-images-amazon.com/images/I/51-QVff5Q3L._BG0,0,0,0_FMpng_.jpg", 680),
        new Book("B01IUUX6IO", "中間管理録トネガワ（１）", "https://images-fe.ssl-images-amazon.com/images/I/613s46FESBL._BG0,0,0,0_FMpng_.jpg", 541)
    ];
    return allBooks;
};
// const mapStateToProp = () => ({ books: getBooks() });
const mapStateToProp = (state: IMerchandice) => ({ cart: state.merchandice.cart, books: getBooks() });
const mapDispathToProp = (dispatch: Dispatch<IBookAction>) => {
    return { cartAction: new BookActionDispatcher(dispatch) }
};
export default connect(mapStateToProp, mapDispathToProp)(BookList);