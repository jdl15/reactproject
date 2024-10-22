import React, { useState, useEffect } from 'react';
import './style.css';

function Time() {
    const [time, setTime] = useState(new Date());
    
    useEffect(() => {
        const timeId = setInterval(() => {
            setTime(new Date());
        }, 1000); //update every second
        return () => clearInterval(timeId);
    }, []);

    const day = time.getDate();
    const month = time.getMonth()+1;
    const year = time.getFullYear();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    
    return(
        <div className='container'>
            <h2>Current EST</h2>
            <div>{month}/{day}/{year}</div>
            <div>{hour}:{minute}:{second}</div>
        </div>
    )
}

export default Time;