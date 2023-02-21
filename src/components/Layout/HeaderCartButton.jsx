import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
    const ctxt = useContext(CartContext);
    const numberOfCartItems = ctxt.items.reduce((currVal, item) => {
        return currVal + item.amount
    },
        0);

    const btnClasses = `${classes.button} ${buttonIsHighlighted?classes.bump:''}`

    useEffect(() => { 
        if(ctxt.items.length === 0 )
        {
            return;
        }
        else
        {
            setButtonIsHighlighted(true);
        }

        const timer = setTimeout(()=> {
            setButtonIsHighlighted(false);
        },300);
        
        return () => {
            clearTimeout(timer);
        }
    }, [ctxt.items])
    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>
            My Cart
        </span>
        <span className={classes.badge}>{numberOfCartItems}</span>

    </button>


}

export default HeaderCartButton;