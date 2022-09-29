import React from 'react';
import './WorkoutItems.css'
const WorkoutItems = (props) => {
    const { workout, handleAddToList } = props;
    const { id, name, age, description, img, time } = workout;
    return (
        <div className='workout'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <h4>For age:{age}</h4>
            <h4>Time-required:{time}</h4>
            <button onClick={() => handleAddToList(workout)} className='btn-added'><p>Add To List</p></button>

        </div>
    );
};

export default WorkoutItems;