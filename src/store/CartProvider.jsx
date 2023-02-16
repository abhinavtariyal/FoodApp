import CartContext from './cart-context'
import { useReducer } from 'react';
const defaultCartState = {
    items: [],
    totalAmount:0
}
const cartReducer = (state,action) => {
if(action.type === 'ADD_ITEM'){
const updatedItems = state.items.concat(action.item);
const updatedAmount = state.totalAmount + action.item.price * action.item.amount;
return {
    items: updatedItems,
    totalAmount: updatedAmount
}
}
return defaultCartState;

};

const CartProvider = (props) => {
const [cartState,dispatchCartAction]= useReducer(cartReducer,defaultCartState);
const addCartHandler = (item) => {
dispatchCartAction({type:'ADD_ITEM',item:item})
};

const removeCartHandler = (id) => {
dispatchCartAction({type:'REMOVE_ITEM',id:id})

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