import * as React from 'react';
import { push } from 'react-router-redux'
import { Book } from '../../domain/Book';
import { BookActionDispatcher } from '../../reducer/BookActionDispatcher';
import store from '../../store/store';

interface ICartProp {
    cart: Book,
    quantity: number,
    changeDispatcher: BookActionDispatcher
}

interface ICartState {
    quantity: string;
}

class CartContent extends React.Component<ICartProp, ICartState> {

    // private changeBook = (event: IChangeCountEvent) => ((isbn: string, quantity: number) => this.changeItemCount(isbn, quantity));

    // 関数を返す関数を作ったら普通に onChange={changeInputBox()} と書く必要がありますが、無意味に遅延実行する必要はありません。うんともすんともいいません。
    // private changeInputBox = ((e: React.FormEvent<HTMLInputElement>) => () => {
    // }
    /**
     * 数量入力コンポーネントの change イベントをハンドルします。
     * このイベントの引数は、e となりますが、react から自動的にイベントオブジェクトが渡されてきます。
     * 関数を定義するといい感じでイベントオブジェクトが渡ってきます。
     */
    private changeInputBox = ((e: React.FormEvent<HTMLInputElement>) => {
        const quantity = (e.target as HTMLInputElement).value;
        this.setState({
            quantity: quantity === "" ?  "0" : quantity,
        });
    });

    /**
     * 本の数量をストアに反映します。
     * 関数に引数を渡したいので、遅延実行される関数を定義します。
     * 関数を指定するのは
     */
    private changeBook = ((isbn: string, quantity: number) => () => {
        this.props.changeDispatcher.changeCart(isbn, quantity);
        store.dispatch(push("/cartList"));
    });

    private toQuantity = ((): number => {
        return Number.parseInt(this.state.quantity);
    });

    constructor(props: ICartProp, state: ICartState) {
        super(props, state);
        // コンストラクタの初期化では setState はつかわない。
        // setState をしても、後のコンテキストで this.state.quantity とすると NullPointer エラーになってしまう。
        // this.setState({
        //     quantity: this.props.quantity.toString(),
        // })
        this.state = {
            quantity: this.props.quantity.toString(),
        }
        this.changeBook = this.changeBook.bind(this)
        this.changeInputBox = this.changeInputBox.bind(this);
    }
    public render() {
        return (
            <div>
                <div className="image-float">
                    <img className="image-size" alt={this.props.cart.title} src={this.props.cart.url} />
                </div>
                <div className="marchant-description">
                    <ul>
                        <li key={this.props.cart.isbn}>
                            <span>{this.props.cart.title} </span>
                        </li>
                        <li>
                            {/* react ではテキストボックスの値の変更は自然に行えない。change イベントでステートを変更 (setState) すべし*/}
                            {/* <input className="item-count-box" type="text" value={this.itemCount(book.isbn)} />個 */}
                            <input className="item-count-box" type="text" value={this.toQuantity()} onChange={this.changeInputBox} />個
                                    </li>
                        <li className="cart-change">
                            <button onClick={this.changeBook(this.props.cart.isbn, this.toQuantity())}>変更</button>
                        </li>
                    </ul>
                </div>
                <div className="marchant-price">
                    ¥{this.props.cart.price * this.props.quantity}
                </div>
            </div>
        )
    }
}
export default CartContent;