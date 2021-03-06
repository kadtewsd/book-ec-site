import * as React from 'react';
import { push } from 'react-router-redux'
import { Book } from '../../domain/Book';
import CartDetail from '../../domain/CartDetail';
import { BookActionDispatcher } from '../../reducer/BookActionDispatcher';
import store from '../../store/store';

interface ICartProp {
    cart: CartDetail,
    changeDispatcher: BookActionDispatcher
}

interface ICartState {
    itemQuantity: string;
}

interface IFocustEvent extends React.FocusEvent<HTMLInputElement> {
    target: HTMLInputElement;
}

class CartContent extends React.Component<ICartProp, ICartState> {

    // private changeBook = (event: IChangeCountEvent) => ((isbn: string, itemQuantity: number) => this.changeItemCount(isbn, itemQuantity));

    // 関数を返す関数を作ったら普通に onChange={changeInputBox()} と書く必要がありますが、無意味に遅延実行する必要はありません。うんともすんともいいません。
    // private changeInputBox = ((e: React.FormEvent<HTMLInputElement>) => () => {
    // }
    /**
     * 数量入力コンポーネントの change イベントをハンドルします。
     * このイベントの引数は、e となりますが、react から自動的にイベントオブジェクトが渡されてきます。
     * 関数を定義するといい感じでイベントオブジェクトが渡ってきます。
     */
    private changeInputBox = ((e: React.FormEvent<HTMLInputElement>) => {
        const itemQuantity = (e.target as HTMLInputElement).value;
        if (isNaN(Number.parseInt(itemQuantity))) {
            this.setState({
                itemQuantity: "0"
            });
            return;
        }
        this.setState({
            itemQuantity: itemQuantity === "" ? "0" : itemQuantity,
        });
    });

    /**
     * 本の数量をストアに反映します。
     * 関数に引数を渡したいので、遅延実行される関数を定義します。
     * 関数を指定するのは
     */
    private changeBook = ((isbn: string, itemQuantity: number) => () => {
        this.props.changeDispatcher.changeCart(isbn, itemQuantity);
        store.dispatch(push("/cartList"));
    });

    private toQuantity = ((): number => {
        return Number.parseInt(this.state.itemQuantity);
    });
    constructor(props: ICartProp, state: ICartState) {
        super(props, state);
        // コンストラクタの初期化では setState はつかわない。
        // setState をしても、後のコンテキストで this.state.itemQuantity とすると NullPointer エラーになってしまう。
        // this.setState({
        //     itemQuantity: this.props.itemQuantity.toString(),
        // })
        this.state = {
            itemQuantity: this.props.cart.itemQuantity.toString(),
        }
        this.changeBook = this.changeBook.bind(this)
        this.changeInputBox = this.changeInputBox.bind(this);
    }
    public render() {
        if (!this.props.cart.book.hasMerchant()) {
            return;
        }
        const book = this.props.cart.book as Book;
        return (
            <div>
                <div className="image-float">
                    <img className="image-size" alt={book.title} src={book.url} />
                </div>
                <div className="marchant-description">
                    <ul>
                        <li key={book.isbn}>
                            <span>{book.title} </span>
                        </li>
                        <li>
                            {/* react ではテキストボックスの値の変更は自然に行えない。change イベントでステートを変更 (setState) すべし*/}
                            {/* <input className="item-count-box" type="text" value={this.itemCount(book.isbn)} />個 */}
                            <input className="item-count-box" type="text" value={this.toQuantity()} onChange={this.changeInputBox} onFocus={this.handleFocus} />個
                                    </li>
                        <li className="cart-change">
                            <button onClick={this.changeBook(book.isbn, this.toQuantity())}>変更</button>
                        </li>
                    </ul>
                </div>
                <div className="marchant-price">
                    <div className="price-div">
                        ¥{book.price * this.props.cart.itemQuantity}
                    </div>
                </div>
            </div>
        )
    }
    private handleFocus(event: IFocustEvent) {
        event.target.select();
    }

}
export default CartContent;