import React, { useState } from 'react';
import './Login.css';
const Logo = () => {


return (
    <div className="LogoDiv">
        <div className="LogoContainer">
    
        </div>
        <svg width="400" height="200" viewBox="0 0 400 200">
        <circle cx="200" cy="100" r="80" stroke="white" strokeWidth="12"  />
        <circle cx="200" cy="100" r="60" stroke="#14171D" strokeWidth="22" />
            <circle cx="200" cy="100" r="60" fill="white" />
            <line x1="140" y1="120" x2="260" y2="120" stroke="#14171D" strokeWidth="12"transform="translate(0,-20)"  />
            <line x1="140" y1="140" x2="260" y2="140" stroke="#14171D" strokeWidth="12"transform="translate(0,-20)" />
            <rect x="190" y="120" width="20" height="80" fill="white" stroke="#14171D" strokeWidth="12" transform="translate(20,0)" />
            <rect x="190" y="120" width="20" height="80" fill="white" stroke="#14171D" strokeWidth="12" transform="translate(-20,0)" />
            <path transform="scale(0.5) translate(300,150)" d="M10,50 Q100,-60 190,50 Q100,160 10,50 Z" fill="white" stroke-width="20" stroke="#14171D" />
            <ellipse transform="scale(0.5) translate(300,150)" cx="100" cy="48" rx="35" ry="35" stroke-width="2px" stroke-opacity="0" fill="#14171D" />
            <ellipse transform="scale(0.5) translate(300,150)" cx="100" cy="35" rx="10" ry="10" stroke-width="2px" stroke="white" fill="white" />
        </svg>

       
    </div>
)
}; 
export default Logo;