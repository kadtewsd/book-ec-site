import * as React from 'react'
import { Book } from '../domain/Book';
import BookDisplay from './book/BookDisplay';
import './BookList.css';

interface IBookListProp {
    books: Book[]
}

class BookList extends React.Component<IBookListProp, {}> {
    public render() {
        return (
            this.props.books.map(book => (
                <div className="list-centering">
                    <BookDisplay key={book.isbn} book={book} />
                </div>
            ))
        );
    }
}
export default BookList;
