
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Rules.css';
const Rules = ({ items }) => {
    const [times, setTimes] = useState(0);



    let total = 0;
    for (const item of items) {
        console.log(item)
        total = total + item.time;

    }
    // function App() {
    //     const notify = () => toast("Wow so easy!");
    // }
    return (
        <div className='cart'>
            <h1>Vai Ami to obak:{items.length}</h1>
            <h1>Add A Break</h1>
            <div className='duration'>
                <button className='border-radius ' onClick={() => setTimes(20)}>20s</button>
                <button className='border-radius' onClick={() => setTimes(30)}>30s</button>
                <button className='border-radius' onClick={() => setTimes(40)}>40s</button>
                <button className='border-radius' onClick={() => setTimes(50)}>50s</button>

            </div>
            <h1>Exercise Details</h1>
            <div className='exercise-detail'> <h3>Exercise time: {total} <small>seconds</small></h3></div>
            <div className='exercise-detail'> <h3>Break time:  {times} seconds</h3></div>

            <button className='btn-activity'  ><p>Activity Completed</p></button>

        </div>
    );
};

export default Rules;