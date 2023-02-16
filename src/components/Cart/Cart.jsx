import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'
import { useContext } from 'react'
const Cart = (props) => {
    const ctxt = useContext(CartContext);

    const  totalAmount = `$${ctxt.totalAmount.toFixed(2)}`;
    const hasItems = ctxt.items.length > 0;
    const cartItems = <ul className={classes['cart-items']}>{ctxt.items.map((item, index) => (<li key={index}>
        {item.name}
    </li>))}</ul>

    return (
        <Modal onClose = {props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                { hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;