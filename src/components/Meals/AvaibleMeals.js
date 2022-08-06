import React from 'react'
import classes from './AvaibleMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Dosa',
        description: 'South Indian Special',
        price: 120.9,
    },
    {
        id: 'm2',
        name: 'Misad Pav',
        description: 'Punari Special!',
        price: 50.21,
    },
    {
        id: 'm3',
        name: 'Tarri-Poha',
        description: 'Nagpur Famous!',
        price: 20.69,
    },
    {
        id: 'm4',
        name: 'Pizza',
        description: 'Fresh Pan Cheese Loaded...',
        price: 199.23,
    },
];

const AvaibleMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => <MealItem id={meal.id}
        key={meal.id} name={meal.name} description={meal.description} price={meal.price} />)
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
}

export default AvaibleMeals
