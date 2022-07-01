import React from "react";
import "./about.css";

const Card = ({img,name,job,email}) => {
  return (
    <div className='About-card'>
      <img src={img} alt='Jane' style={{ width: "100%"  }} />
      <div className='About-container'>
        <h2>{name}</h2>
        <p className='About-title'>{job}</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>{email}</p>
        <p>
          <button className='About-button'>Contact</button>
        </p>
      </div>
    </div>
  );
};

export default Card;
