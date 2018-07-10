import * as React from 'react'
import { Book } from '../domain/Book';
import { BookActionDispatcher } from '../reducer/BookActionDispatcher';
import BookDisplay from './book/BookDisplay';
import './BookList.css';

interface IBookListProp {
    books: Book[];
    cartAction: BookActionDispatcher;
}

class BookList extends React.Component<IBookListProp, {}> {
    public render() {
        return (
            this.props.books.map(book => (
                <div className="list-centering">
                    <BookDisplay key={book.isbn} book={book} cartAction={this.props.cartAction}/>
                </div>
            ))
        );
    }
}
export default BookList;
