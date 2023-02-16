import {useContext} from 'react'
import MealItemForm from './MealItemForm';
import classes from './MealsItem.module.css';
import CartContext from '../../store/cart-context';
const MealsItem = (props) => {
    const ctxt = useContext(CartContext);
    const addToCartHandler = (amount) => {
      ctxt.addItem({
        id:props.id,
        name:props.name,
        amount:amount,
        price:props.price
      }
        
      ); 
    }
    const price = `$${props.price.toFixed(2)}`
    return <li className= {classes.meal}>
    <div>
        <h3 className={classes.name}>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
    </div>
    <div>
        <MealItemForm onAddToCart = {addToCartHandler}/>
    </div>    
    </li>

}

export default MealsItem;