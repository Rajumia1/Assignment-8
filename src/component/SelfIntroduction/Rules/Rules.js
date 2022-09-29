import React from 'react';
import './Rules.css';
const Rules = ({ items }) => {

    let total = 0;
    for (const item of items) {
        console.log(item)
        total = total + item.time;

    }
    return (
        <div className='cart'>
            <h1>Vai Ami to obak:{items.length}</h1>
            <h1>Add A Break</h1>
            <div className='duration'>

                <div className='border-radius'><p>20s</p></div>
                <div className='border-radius'> <p>30s</p></div>
                <div className='border-radius'><p>40s</p></div>
                <div className='border-radius'><p>50s</p></div>
            </div>
            <h1>Exercise Details</h1>
            <div className='exercise-detail'> <h3>Exercise time: {total} <small>seconds</small></h3></div>
            <div className='exercise-detail'> <h3>Break time: <span>00</span> seconds</h3></div>

            <button className='btn-activity'><p>Activity Completed</p></button>
        </div>
    );
};

export default Rules;