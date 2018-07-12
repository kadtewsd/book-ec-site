import * as React from 'react'
import { Book } from '../domain/Book';
import { BookActionDispatcher } from '../reducer/BookActionDispatcher';
import BookDisplay from './book/BookDisplay';
import './BookList.css';

interface IBookListProp {
    books: Book[];
    cart: Book[];
    cartAction: BookActionDispatcher;
}

class BookList extends React.Component<IBookListProp, {}> {
    constructor(prop: IBookListProp) {
        super(prop);
    }
    public render() {
        return (
            <div>
                <a href="/">Go To Top Page</a>
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
