import React from 'react';
import './Home.css'
import { Carousel } from 'react-bootstrap';
import Services from '../Services/Services';
import slidedoc1 from '../../../img/slidedoce1.jpg'
import sliderdoc from '../../../img/sliderdoc.jpg'
import slidedoc3 from '../../../img/sliderdoc3.jpg'

const Home = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slidedoc1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-primary'>
                        <h3>Heart Speciatist</h3>
                        <p>After 35 most people have heart problem.If you fell uneasy or anything wrong, please contact us.We are always there for you.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-design"
                        src={sliderdoc}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='text-primary'>
                        <h3>child Specialist</h3>
                        <p>Child have many problem and we have to understand them. So for any problem of your child, we are here.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slidedoc3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='text-primary'>
                        <h3>Medicine Specialist</h3>
                        <p>Take your time and discuss any kind of problem with worlds best medicine specialist.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* <Services></Services> */}
        </div>
    );
};

export default Home;