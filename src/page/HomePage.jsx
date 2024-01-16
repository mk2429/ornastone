import React from 'react'
import Navbar from '../components/Navbar'
import SearchBox from '../components/SearchBox'

import CategoryCorousal from '../components/CategoryCorousal'
import { Carousel } from "react-bootstrap";
import FreqProduct from '../components/FreqProduct';
import ProductCorousal from '../components/ProductCorousal';
import Footer from '../components/Footer';

export default function HomePage() {
    const images = ["https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/AppBanner/HP/Desktop_1920x694.jpg",
        "https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/Banner/justin/Desktop_1920x694.jpg",
        "https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/AppBanner/HP/Desktop_1920x694.jpg"]
    return (
        <div>
            <Navbar />
            <div className='homebody' style={{ marginTop: "90px" }}>
                <SearchBox />
                <CategoryCorousal />
                <Carousel className='mb-2'>
                    {images.map((image, index) => (
                        <Carousel.Item key={index}>
                            <img className="d-block w-100 homecorousal" src={image} alt={`Slide ${index + 1}`} />
                        </Carousel.Item>
                    ))}
                </Carousel>
                <div className='homebanner bg-danger' >
                    <img src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/AppBanner/Blog/01/Desktop_1920x694.jpg" alt="" className=' h-100 w-100' style={{ objectFit: "cover" }} />
                </div>

                <div className='w-100 my-2 d-flex justify-content-center align-items-center'>
                    <div className="video-background" style={{ width: "95%", borderRadius: "40px", overflow: "hidden" }} >
                        <video autoPlay loop muted width="100%" style={{ objectFit: "cover" }}>
                            <source src={require('./Yoni Edit _ Performance _ 16_9 _ 12 seconds _ with end slide.mp4')} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className='homebanner bg-danger' >
                    <img src="https://www.giva.co/cdn/shop/files/hero_banner_-web_15_-min.jpg?v=1705405067&width=2000" alt="" className=' h-100 w-100' style={{ objectFit: "cover" }} />
                </div>
                <FreqProduct />
                <hr className='mt-5'/>
                <h1>Our <span style={{color:"red"}}>Collections</span></h1>
                <hr />
                <ProductCorousal title="Necklaces"/>
                <ProductCorousal title="Rings"/>
<Footer/>
            </div>
        </div>
    )
}
