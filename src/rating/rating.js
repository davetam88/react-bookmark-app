import React from 'react';
import './rating.css';

export default function Rating(props) {
  const stars = [0,0,0,0,0]
    .map((_, i) => {
      return (
      i < props.value
        //    .map(i) => i < props.value
        ? <span key={i}>&#9733;</span>
        : <span key={i}>&#9734;</span>
      )
    });
    // 9733 is blank star
    // 9734 is fillin stara
    
  return (
    <div className="rating">
      {stars}
    </div>
  );
}

