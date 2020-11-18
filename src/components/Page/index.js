import React from 'react';
import Bg from './bg.png';


var sectionStyle = {
  width: "100%",
  height: "1000px",
  backgroundImage: "url(" + Bg + ")"
};

export default function index({children}) {
    return (
        <body style={sectionStyle} >
            {children}
        </body>
            
        
    )
}
