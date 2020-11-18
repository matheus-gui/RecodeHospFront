import React from 'react';
import Bg from './bg.jpg';


var sectionStyle = {
  display: "table",
  width: "100%",
  height: "100vh",
  padding: "100px 0",
  background: "url(" + Bg + ")",
  backgroundPosition: "30% 45%",
  backgroundSize:"cover"
};

export default function index({children}) {
    return (
        <body style={sectionStyle} >
            {children}
        </body>
            
        
    )
}
