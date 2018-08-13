import * as React from 'react'
import { Link } from 'react-router-dom';
import { Book } from '../domain/Book';
import CartDetail from '../domain/CartDetail';
import { BookActionDispatcher } from '../reducer/BookActionDispatcher';
import BookDisplay from './book/BookDisplay';
import './BookList.css';

interface IBookListProp {
    books: Book[];
    cart: CartDetail[],
    cartAction: BookActionDispatcher;
}

class BookList extends React.Component<IBookListProp, {}> {
    constructor(prop: IBookListProp) {
        super(prop);
    }
    public render() {
        return (
            <div>
                <Link to={"/"}>Go To Top Page</Link>
                {this.props.books.map(book => (
                    <div className="list-centering">
                        <BookDisplay key={book.isbn} book={book} cartAction={this.props.cartAction} />
                    </div>
                ))}
            </div>
        );
    }
}
export default BookList;
