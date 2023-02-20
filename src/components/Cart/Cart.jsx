import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'
import { useContext } from 'react'
import CartItem from './CartItem'
const Cart = (props) => {
    const ctxt = useContext(CartContext);

    const totalAmount = `$${ctxt.totalAmount.toFixed(2)}`;
    const handleCartRemove = (id) => {
        ctxt.removeItem(id);
    }

    const handleCartAdd = (item) => {
        ctxt.addItem({...item,amount: 1});
    }
    const hasItems = ctxt.items.length > 0;
    const cartItems = <ul className={classes['cart-items']}>
        {ctxt.items.map((item, index) => (
            <CartItem key={item.id}
                index={index}
                price={item.price}
                amount={item.amount}
                onAdd={handleCartAdd.bind(null, item)}
                onRemove={handleCartRemove.bind(null, item.id)}
            />))}</ul>
    return (
        <Modal onClose={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;