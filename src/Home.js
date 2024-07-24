import React from 'react';
import pic from './pic.png';

function Home() {
  return (
    <div>
      <h1>Welcome to My Page!</h1>


      <img 
        src="https://miro.medium.com/v2/resize:fit:702/1*Ra02AqsQlC0KV229EvM98g.png" 
        alt="Description of external image" 
    
      />

     
      <div className="vision my-4">
        Our vision is to inspire and transform businesses, propelling them to excel in the digital realm utilizing data analytics and AI solutions. We envision a future where organizations adapt and thrive, leveraging data-driven insights for unparalleled success.
      </div>

{/*       
      <img 
        src={pic} 
        alt="Description of local image" 
        className="my-4"      /> */}
    </div>
  );
}

export default Home;
