import React, { useEffect } from 'react'
import { useData } from '../context/DataContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Category from './Category';

const Carousel = () => {
    const { data, fetchAllProducts } = useData()
    console.log(data);

    useEffect(() => {
        fetchAllProducts()
    }, [fetchAllProducts])

    const SamplePrevArrow = (props) => {
        const {className, style, onClick} = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`} style={{zIndex:3}}>
                <AiOutlineArrowLeft className='arrows' style={{...style, display: "block", borderRadius:"50px", background:"#f53347" , color:"white" , position:"absolute", padding:"2px", left:"50px"}} />
            </div>
        )
    }
    const SampleNextArrow = (props) => {
        const {className, style, onClick} = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`}>
                <AiOutlineArrowRight className='arrows' style={{...style, display: "block", borderRadius:"50px", background:"#f53347" , color:"white" , position:"absolute", padding:"2px", right:"50px"}} />
            </div>
        )
    }

    var settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed:2000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover:false,
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to="prev" />,
    };

    return (
        <div className='bg-slate-950'>
            <Slider {...settings}>
                {
                    data?.slice(0,7)?.map((item, index) => {
                        return <div key={index} className='relative overflow-hidden'>
                            <div className='absolute inset-0 bg-gradient-to-r from-slate-950 via-[#15162b] to-slate-950 opacity-90'></div>
                            <div className='relative mx-auto flex flex-col-reverse items-center justify-between gap-10 px-4 py-20 md:flex-row md:px-8 lg:px-16'>
                                <div className='max-w-2xl space-y-6 text-center md:text-left'>
                                    <span className='inline-flex rounded-full bg-red-500/15 px-4 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-red-200'>Featured product</span>
                                    <h1 className='text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl'>{item.title}</h1>
                                    <p className='text-sm leading-7 text-slate-300 md:text-base md:max-w-xl'>{item.description}</p>
                                    <button className='inline-flex rounded-full bg-gradient-to-r from-red-500 to-purple-500 px-6 py-3 text-base font-semibold text-white shadow-xl shadow-red-500/20 transition hover:scale-[1.01]'>Shop Now</button>
                                </div>
                                <div className='relative'>
                                    <div className='absolute -right-10 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-purple-500/20 blur-3xl'></div>
                                    <img src={item.image} alt={item.title} className='relative mx-auto h-[380px] w-[380px] max-w-full object-contain transition duration-500 hover:scale-105' />
                                </div>
                            </div>
                        </div>
                    })
                }              
            </Slider>
            <Category/>
        </div>
    )
}

export default Carousel