

import React, { useContext } from 'react';
import './Carousel.css';
import { MoviesContext } from '../../Context/MovieContext';
import { FaPlayCircle } from "react-icons/fa";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom/cjs/react-router-dom';
const CustomCarousel = () => {
    const { allProduct } = useContext(MoviesContext);

    const carouselfilter = allProduct.slice().sort((a , b)=>b.year - a.year).slice(0 , 9); // Assuming you want the first 9 items for the carousel

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 7
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 5
        }
    };

    return (
        <div className='carousel'>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all 0.7s"
                transitionDuration={1000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="carousel-item-padding-20-px"
                draggable={true} 
                swipeable={true}
            >
                {carouselfilter.map((movie, i) => (
                    <div className='carouselitem' key={i}>
                       <Link to={`/MoviesDetail/${movie.id}/${movie.title}/${movie.year}`}><img src={movie.posterUrl} alt="" />
                        <div className="playcarouselitem">
                            <FaPlayCircle className='faplay' />
                        </div></Link> 
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default CustomCarousel;


