import React from 'react';
import web from '../Image/Home.jpg'
import Common from './Common';
const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with "
        visit = "/service"
        imgsrc ={web}
        btname = "Get Started"
      >

      </Common> 
    </>
  );
}

export default Home










































































// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Home = () => {
//     return (
//         <>
//             <section id='header' className='d-flex align-item-center'>

//                 <div className='container-fluid nav_bg'>
//                     <div className='row'>
//                         <div className='col-10 mx-auto'>
//                         <div className='row'>

//                             <div className='col-md-6 pt-5 mt-5 pt-lg-0 order-2 order-lg-1  f-column justify-content-center '>
//                                 <h1>
//                                 Grow your business with <strong className='brand-name'>ThaapaTechnical</strong>
//                                 </h1>
//                                 <h2 className='my-3'>
//                                     we are the team of talented developer making website
//                                 </h2>

//                                 <div className='mt-3'>
//                                     <NavLink to="/service" className="btn-get-started">Get Started </NavLink>
//                                 </div>
//                             </div>

//                             <div className='col-lg-6 order-1 order-lg-2 header-img'  >
//                                 <img src="https://source.unsplash.com/400x500?code" alt="home img" className='img-fluid animated' />
//                             </div>
//                         </div>
                           
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

// export default Home;
