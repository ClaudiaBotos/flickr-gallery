import React from 'react';


const Photos = (props) => {
  return(
   <li className="image-wrap">
    <img src={props.url}  alt={props.title}/>
  </li>
);

};

export default Photos
