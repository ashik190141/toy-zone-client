import img1 from '../../Images/latest/1.png';
import img2 from '../../Images/latest/2.png';
import img3 from '../../Images/latest/3.png';
import img6 from '../../Images/latest/6.png';

const Latest = () => {
    return (
        <div className="max-w-7xl mx-auto mt-14">
            <h2 className='text-5xl font-bold text-center mb-10'>Latest <span className='text-orange-500'>Product</span></h2>
            <div className='flex flex-col md:flex-row gap-3 pl-9 md:pl-0' data-aos="zoom-in-up">
                <img src={img1} alt="" className='w-80 h-72 border border-orange-800 rounded-xl'/>
                <img src={img2} alt="" className='w-80 h-72 border border-orange-800 rounded-xl'/>
                <img src={img3} alt="" className='w-80 h-72 border border-orange-800 rounded-xl'/>
                <img src={img6} alt="" className='w-80 h-72 border border-orange-800 rounded-xl'/>
            </div>
        </div>
    );
};

export default Latest;