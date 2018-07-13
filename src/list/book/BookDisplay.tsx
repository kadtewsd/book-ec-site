import * as React from 'react';
import { push } from 'react-router-redux'
import { Book } from '../../domain/Book'
import { BookActionDispatcher } from '../../reducer/BookActionDispatcher';
import store from '../../store/store';

export interface IBookProp {
    book: Book;
    cartAction: BookActionDispatcher
}
interface IImageEvent extends React.MouseEvent<HTMLImageElement> {
    target: HTMLImageElement;
}

// interface IImageEvent extends React.MouseEvent<HTMLAnchorElement> {
//     target: HTMLAnchorElement;
// }
class BookDisplay extends React.Component<IBookProp, {}> {
    constructor(prop: IBookProp) {
        super(prop);
        // this.addBook2Cart = prop.cartAction.addBook2Cart.bind(this, prop.book.isbn);
        // bind しないと addBook2Cart 関数がコールされた際の this は undefined になる。コンテキストを BookDisplay クラスにするため bind する。
        this.addBook2Cart = this.addBook2Cart.bind(this);
    }
    public render() {
        return (
            <div>
                <ul>{this.props.book.title}</ul>
                <img src={this.props.book.url} onClick={this.addBook2Cart} />
            </div>
        );
    }
    private addBook2Cart(event: IImageEvent) {
        this.props.cartAction.addBook2Cart(this.props.book.isbn);
        store.dispatch(push("/"));
    }
}

export default BookDisplay;