import { connect } from 'react-redux';
import { Dispatch } from '../../node_modules/redux';
import { BookActionDispatcher, IBookAction } from '../reducer/BookActionDispatcher';
import { IMerchandice } from '../store/store';
import Cart from './Cart';

const mapStateToProp = (state: IMerchandice) => ({ cart: state.merchandice.cart });
const mapDispatchToProp = (dispatch: Dispatch<IBookAction>) => {
    return { changeDispatcher: new BookActionDispatcher(dispatch) }
}
const CartList = connect(mapStateToProp, mapDispatchToProp)(Cart);
export default CartList;