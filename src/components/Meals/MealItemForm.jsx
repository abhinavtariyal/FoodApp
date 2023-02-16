import Input from '../UI/Input';
import classes from './MealItemForm.module.css'
import { useRef, useState } from 'react'
const MealItemForm = (props) => {
    const amountInputRef = useRef();
    const [isValid, setIsValid] = useState(true);
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim() === 0 ||
        enteredAmount < 1 ||
        enteredAmount > 5) {
        setIsValid(false);
        return;
    }

    props.onAddToCart(enteredAmountNumber);

    }


  
    return <form className={classes.form} onSubmit={submitHandler}>
        <Input
            ref={amountInputRef}
            label='Amount'
            input={{
                id: 'amount' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
        <button>+ Add</button>
        {!isValid && <p>Please enter a value (1-5)</p>}
    </form>


}

export default MealItemForm;