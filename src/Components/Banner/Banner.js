import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    const [banner, setBanner] = useState([]);
    useEffect(() => {
        const run = async () => {
            await fetch('http://localhost:5000/banner').then(res => res.json()).then(data => setBanner(data));
        }
        run();
    }, []);
    return (
        <div className='banner'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner[0]?.img}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner[1]?.img}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner[2]?.img}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;