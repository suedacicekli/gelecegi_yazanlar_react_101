import React, { useState, useEffect } from 'react'

function Timer() {
    const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });



    return (
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-center">React Timer</div>
                <span className="d-flex justify-content-center">{(time.h >= 10) ? "0" + time.h : time.h}:{(time.m >= 10) ? "0" + time.m : time.m}:{(time.s >= 10) ? "0" + time.s : time.s}:{(time.ms >= 10) ? "0" + time.ms : time.ms}</span>
            </div>
        </div>
    )
}

export default Timer