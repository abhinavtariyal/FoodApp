import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = () => {

return <button className= {classes.button}>
<span>My Cart</span>
<span>
    <CartIcon />
</span>
<span></span>

</button>


}

export default HeaderCartButton;