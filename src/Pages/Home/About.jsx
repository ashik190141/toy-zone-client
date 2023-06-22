import person from '../../Images/banner/3.png'
import parts from '../../Images/banner/2.png'

const About = () => {
    return (
        <div className='max-w-7xl mx-auto mt-20' data-aos="zoom-in-up">
            <h3 className='text-3xl text-orange-500 font-bold text-center mb-10'>About us</h3>
            <div className="hero bg-base-200 p-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative' data-aos="fade-right"
                                                        data-aos-offset="500"
                                                        data-aos-duration="800">
                        <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                        <img src={parts} className="w-1/2 absolute right-5 top-1/2 rounded-xl border-8 border-white shadow-2xl" />
                    </div>
                    <div className='lg:w-1/2' data-aos="fade-left"
                                                        data-aos-offset="500"
                                                        data-aos-duration="800">
                        <h1 className="md:text-5xl text-3xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-6 text-justify">
                            Toy, plaything, usually for an infant or child, and often an instrument used in a game. Toys, playthings, and games survive from the most remote past and from a great variety of cultures. The ball, kite, and yo-yo are assumed to be the oldest objects specifically designed as toys. 
                        </p>
                        <p className="py-6 text-justify">
                            Here we provide the latest toys with oldest one. We cordially welcome you and yours child in our toy shop. Hope you like it. If you have any doubt, please contact us.  
                        </p>
                        <button className="btn btn-warning">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;