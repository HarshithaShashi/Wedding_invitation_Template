import React from 'react';
import './StorySection.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles

import image1 from '../assets/images/image2.jpg';
import image2 from '../assets/images/firstdate.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image1.jpg';
import image5 from '../assets/images/proposal.jpg'; // Additional image for carousel
import image6 from '../assets/images/image2.jpg'; // Additional image for carousel

const StorySection = () => {
    return (
        <div className='Story_Meeting' id='Story'>
            {/* Story Section */}
            <div className='Story_heading'>Our Love Story</div>

            {/* First Meet Section */}
            <div className='Events_box'>
                <div className='Event_box_left'>
                    <h3 className='Event_Date'>Jan 12, 2023</h3>
                    <div className='SubEvent_box'>
                        <h1 className='SubEvent_heading'>First Meet</h1>
                        <p className='Story1'>
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. 
                            I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend,
                        </p>
                    </div>
                </div>
                <div className='Event_flowline'>
                    <span className='Event_circle'></span>
                    <span className='Event_line'></span>
                </div>
                <div className='Event_box_right'>
                    <img src={image1} alt="First Meet"/>
                </div>
            </div>

            {/* First Date Section with Carousel */}
            <div className='Events_box'>
                <div className='Event_box_left'>
                    <h3 className='Event_Date'>Feb 14, 2023</h3>
                    <div className='SubEvent_box'>
                        <h1 className='SubEvent_heading'>First Date</h1>
                        <p className='Story1'>
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. 
                            I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend,
                        </p>
                    </div>
                </div>
                <div className='Event_flowline'>
                    <span className='Event_circle'></span>
                    <span className='Event_line'></span>
                </div>
                <div className='Event_box_right'>
                    <Carousel showThumbs={false} showArrows={false} showIndicators={false} showStatus={false} autoPlay infiniteLoop>
                        <div>
                            <img src={image2} alt="First Date 1" />
                        </div>
                        <div>
                            <img src={image5} alt="First Date 2" />
                        </div>
                    </Carousel>
                </div>
            </div>

            {/* Proposal Section with Carousel */}
            <div className='Events_box'>
                <div className='Event_box_left'>
                    <h3 className='Event_Date'>Apr 12, 2023</h3>
                    <div className='SubEvent_box'>
                        <h1 className='SubEvent_heading'>Proposal</h1>
                        <p className='Story1'>
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. 
                            I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend,
                        </p>
                    </div>
                </div>
                <div className='Event_flowline'>
                    <span className='Event_circle'></span>
                    <span className='Event_line'></span>
                </div>
                <div className='Event_box_right'>
                    <Carousel showThumbs={false} showArrows={false} showIndicators={false} showStatus={false} autoPlay infiniteLoop>
                        <div>
                            <img src={image3} alt="Proposal 1" />
                        </div>
                        <div>
                            <img src={image6} alt="Proposal 2" />
                        </div>
                    </Carousel>
                </div>
            </div>

            {/* Engagement Section */}
            <div className='Events_box'>
                <div className='Event_box_left'>
                    <h3 className='Event_Date'>Jul 14, 2023</h3>
                    <div className='SubEvent_box'>
                        <h1 className='SubEvent_heading'>Engagement</h1>
                        <p className='Story1'>
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. 
                            I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend,
                        </p>
                    </div>
                </div>
                <div className='Event_flowline'>
                    <span className='Event_circle'></span>
                    <span className='Event_line'></span>
                </div>
                <div className='Event_box_right'>
                    <img src={image4} alt="Engagement"/>
                </div>
            </div>
        </div>
    );
};

export default StorySection;
