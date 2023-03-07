import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return (
        <>
            <section id='header' className='d-flex align-item-center'>

                <div className='container-fluid nav_bg'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>

                                <div className='col-md-6 pt-5 mt-5 pt-lg-0 order-2 order-lg-1  f-column justify-content-center '>
                                    <h1>
                                        {/* Grow your business with <strong className='brand-name'>ThaapaTechnical</strong> */}
                                        {props.name}<strong className='brand-name'>GovindRajput</strong>
                                    </h1>
                                    <h2 className='my-3'>
                                        we are the team of talented developer making website
                                    </h2>

                                    <div className='mt-3'>
                                        <NavLink to={props.visit} className="btn-get-started">{props.btname} </NavLink>
                                    </div>
                                </div>

                                <div className='col-lg-6 order-1 order-lg-2 header-img'  >
                                    {/* <img src="https://source.unsplash.com/400x500?code" alt="home img" className='img-fluid animated' /> */}
                                    <img src={props.imgsrc} alt="home img" className='img-fluid animated' />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Common;
