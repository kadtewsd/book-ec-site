import { connect, } from 'react-redux';
import { IMerchandice } from '../store/store';
import Cart from './Cart';

const mapStateToProp = (state: IMerchandice) => ({ cart: state.merchandice.cart });
const CartList = connect(mapStateToProp)(Cart);
export default CartList;