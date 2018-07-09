import * as React from 'react';
import { Book } from '../../domain/Book'

export interface IBookProp {
    book: Book;
}
class BookDisplay extends React.Component<IBookProp, {}> {
    constructor(prop: IBookProp) {
        super(prop);
    }
    public render() {
        return (
            <div>
                <ul>{this.props.book.title}</ul>
                <img src={this.props.book.url} />
            </div>
        );
    }
}

export default BookDisplay;