import * as React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../domain/Book';
import './Cart.css';

interface ICartProp {
    cart: Book[]
}

class Cart extends React.Component<ICartProp, {}> {
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
                        <div className="margin-area">
                            <div className="image-float">
                                <img className="image-size" alt={book.title} src={book.url} />
                            </div>
                            <div className="marchant-description">
                                <ul>
                                    <li key={book.isbn}>
                                        <span>{book.title} </span>
                                    </li>
                                    <li>
                                        <input className="item-count-box" type="text" value={this.itemCount(book.isbn)} />個
                                    </li>
                                </ul>
                            </div>
                            <div className="marchant-price">
                                ¥{book.price * this.itemCount(book.isbn)}
                            </div>
                        </div>
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