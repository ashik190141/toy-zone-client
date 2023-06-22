import img from '../../Images/banner/1.png';

const Banner = () => {
    return (
        <div className='bg-violet-400 max-w-7xl mx-auto p-5 rounded-xl mt-10'>
            <div>
                <div className='md:flex md:items-center'>
                    <div>
                        <p className='font-bold text-3xl md:text-5xl md:w-3/4 mb-8 p-3 md:p-0'>
                            The Largest Animal <span className='text-orange-500'>Toys</span> MarketPlace
                        </p>
                        <p className='text-xl md:w-3/4 text-justify mb-8 p-3 md:p-0'>
                            Here we provide our best services. We have recently updated toys based on animal, also we have old collection. Please pay a visit to our toy shop.
                        </p>
                        <button className='btn btn-primary p-3 mb-4'>Explore More</button>
                    </div>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src={img} alt="" className='img-fluid p-3 md:p-0 rounded-xl'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;