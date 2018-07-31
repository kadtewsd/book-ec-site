import * as React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../domain/Book';
import { BookActionDispatcher } from '../reducer/BookActionDispatcher';
import './Cart.css';
import CartContent from './list/CartContent';

interface ICartProp {
    cart: Book[],
    changeDispatcher: BookActionDispatcher
}
// interface IChangeCountEvent extends React.MouseEvent<HTMLButtonElement> {
//     target: HTMLButtonElement;
// }

class Cart extends React.Component<ICartProp, {}> {

    // private changeBook = (event: IChangeCountEvent) => ((isbn: string, quantity: number) => this.changeItemCount(isbn, quantity));
    constructor(prop: ICartProp) {
        super(prop);
    }
    /**
     * カートの中身を表示します。
     */
    public render() {
        // ################## ここは list に li を溜め込んで一挙に ul の引数としてレンダリングさせている。 #############
        // const list: any[] = [];
        // this.props.cart.map(book => {
        //     list.push(<li key={book.isbn}>{book.title}</li>)
        // });
        // return (
        //     <div>
        //         <Link to={"/bookList"}>Go To Shopping Page</Link>
        //         <ul>
        //             {list}
        //         </ul>
        //     </div >
        // )
        // ################## ここは、ul のネストとして li を書いている。li は return する。 #############
        // return (
        //     <ul>
        //         {this.props.cart.map(book => {
        //             return <li key={book.isbn}> {book.title} </li>;
        //         })}
        //     </ul>
        // )
        // ######################################################################################### 
        return (
            <div>
                <Link to={"/bookList"}>Go To Shopping Page</Link>
                {this.props.cart.filter((value, index, array) => index === array.findIndex((innerValue) => value.isbn === innerValue.isbn)).map(book => (
                    <div className="list-root list-item-row list-item-border">
                        <CartContent cart={book} changeDispatcher={this.props.changeDispatcher} quantity={this.itemCount(book.isbn)} />
                    </div>
                ))}
            </div>
        )
    }

    private itemCount(isbn: string): number {
        return this.props.cart.filter((value) => value.isbn === isbn).length;
    }
}

export default Cart;