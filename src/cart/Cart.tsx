import * as React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../domain/Book';

interface ICartProp {
    cart: Book[]
}

class Cart extends React.Component<ICartProp, {}> {
    constructor(prop: ICartProp) {
        super(prop);
    }
    /**
     * カートの中身を表示します。
     * li をかくと都度、return するというよくわからん仕様なので、
     * ul の下に直接カートを描いてしまいます。
     */
    public render() {
        const list: any[] = [];
        this.props.cart.map(book => {
            list.push(<li key={book.isbn}>{book.title}</li>)
        });
        return (
            <div>
                <Link to={"/bookList"}>Go To Shopping Page</Link>
                <ul>
                    {list}
                </ul>
            </div>
        )
        // return (
        //     <ul>
        //         {this.props.cart.map(book => {
        //             return <li key={book.isbn}> {book.title} </li>;
        //         })}
        //     </ul>
        // )
    }
}

export default Cart;