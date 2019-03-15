import React from 'react';
import Photos from './Photos';
import NotFound from './NotFound';


const Gallery =(props) => {

const results= props.data;
let photos;

if(results.length > 0 ) {

 photos= results.map(photo =>
     <Photos
                   url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                   key={photo.id}
                   title={photo.title}/>
                 );
               } else {
   photos = <NotFound />
 }
   return(
     <ul className="image-list">
       {photos}
     </ul>
   );
}


export default Gallery;
