import React, { useEffect, useState } from 'react';
import SelfIntruduction from '../SelfIntroduction/SelfIntruduction';
import WorkoutItems from '../WorkoutItems/WorkoutItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
const Header = () => {
    const [workouts, setWorkouts] = useState([]);
    const [items, setItems] = useState([]);
    console.log(workouts)
    useEffect(() => {
        fetch(`items.json`)
            .then(res => res.json())
            .then(data => setWorkouts(data))
    }, []);

    const handleAddToList = (workouts) => {
        const newItem = [...items, workouts]
        setItems(newItem)
    }
    return (
        <div className='container'>
            <div className="product-container">
                <div className='header-name'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
                        <h1 className='header'>Fitness founder club</h1>
                    </div>
                    <p  >Select today's fitness</p>
                </div>
                <div className='products-container'>
                    {
                        workouts.map(workout => <WorkoutItems
                            key={workout.id}
                            workout={workout}
                            handleAddToList={handleAddToList}
                        ></WorkoutItems>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <p>Seleted items:{ }</p>
                <SelfIntruduction
                    items={items}
                ></SelfIntruduction>
            </div>
        </div>
    );
};

export default Header;