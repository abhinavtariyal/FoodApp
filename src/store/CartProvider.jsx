import CartContext from './cart-context'
const CartProvider = (props) => {

    const addCartHandler = (item) => {

    };

    const removeCartHandler = (id) => {


    };

    const CardContext = {
        items: [],
        totalAmount: 0,
        addItem: addCartHandler,
        removeItem: removeCartHandler
    }

    return <CartContext.Provider value = {CardContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;