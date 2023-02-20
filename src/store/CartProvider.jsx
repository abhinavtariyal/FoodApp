import CartContext from './cart-context'
import { useReducer } from 'react';
const defaultCartState = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {

        const updatedAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartIndex = state.items.findIndex(item => action.item.id === item.id)

        const existingCartItem = state.items[existingCartIndex];
        let updatedItems;
        if (existingCartItem) {
            let updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartIndex] = updatedItem;
        }
        else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedAmount
        }
    }
    if (action.type === 'REMOVE_ITEM') {
        const existingCartIndex = state.items.findIndex(item => action.id === item.id)

        const existingCartItem = state.items[existingCartIndex];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;
        let updatedItems;
        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)
        }
        else {
            let updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount - 1
            }
            updatedItems = [...state.items];
            updatedItems[existingCartIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;

};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD_ITEM', item: item })
    };

    const removeCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE_ITEM', id: id })

    };

    const CardContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addCartHandler,
        removeItem: removeCartHandler
    }

    return <CartContext.Provider value={CardContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;