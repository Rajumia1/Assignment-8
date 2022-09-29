import React from 'react';
import Rules from './Rules/Rules';
import './SelfIntroduction.css'
const SelfIntruduction = ({ items }) => {
    return (
        <div>

            <div>
                <img src='../../image/277457234_695624915122408_233145056464867423_n.jpg' alt="" />
            </div>
            <div>
                <h3>   Md.Jakir Hossain Raju</h3>
                Madani,Avenue,Dhaka.
            </div>
            <div className="weight-container">
                <div className='weight'>
                    <h2>75 <small>kg</small></h2>
                    <p>Weight</p>
                </div>
                <div className='weight'>
                    <h2>6.5 </h2>
                    <p>Height</p>
                </div>
                <div className='weight'>
                    <h2>25 <small>years</small> </h2>
                    <p>Age</p>
                </div>
            </div>
            <Rules items={items}></Rules>
        </div>
    );
};

export default SelfIntruduction;