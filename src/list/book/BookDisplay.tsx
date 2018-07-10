import * as React from 'react';
import { Book } from '../../domain/Book'
import { BookActionDispatcher } from '../../reducer/BookActionDispatcher';

export interface IBookProp {
    book: Book;
    cartAction: BookActionDispatcher 
}
interface IImageEvent extends React.MouseEvent<HTMLImageElement> {
    target: HTMLImageElement;
} 
class BookDisplay extends React.Component<IBookProp, {}> {
    private addBook2Cart: (event: IImageEvent) => void;
    constructor(prop: IBookProp) {
        super(prop);
        this.addBook2Cart = prop.cartAction.addBook2Cart.bind(this, prop.book.isbn);
    }
    public render() {
        return (
            <div>
                <ul>{this.props.book.title}</ul>
                <img src={this.props.book.url} onClick={this.addBook2Cart} />
            </div>
        );
    }
}

export default BookDisplay;