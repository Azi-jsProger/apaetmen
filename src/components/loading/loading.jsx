import React from 'react';
import enot from "../../enot.gif";
import './loading.css'

const Loading = () => {
    return (
        <div>
            <div className='Loading-flex'>
                <div className='Loading'>
                    <img className='enot-img' src={enot} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Loading;