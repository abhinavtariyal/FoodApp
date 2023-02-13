import '../../dummy.js';
import classes from './AvailableMeals.module.css';
import { DUMMY_MEALS } from '../../dummy.js';
import Card from '../UI/Card.jsx';
import MealsItem from './MealsItem.jsx';
const AvailableMeals = () => {
    const mealList = DUMMY_MEALS.map(meal => <MealsItem
        id={meal.id}
        key={meal.id}
        price={meal.price}
        name={meal.name}
        description={meal.description} />)
    return <section className={classes.meals}>
        <Card>
            <ul>{mealList}</ul>
        </Card>
    </section>
}

export default AvailableMeals;