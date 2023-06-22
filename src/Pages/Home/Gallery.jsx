import img1 from '../../Images/gallery/1.png';
import img2 from '../../Images/gallery/2.png';
import img3 from '../../Images/gallery/3.png';
import img4 from '../../Images/gallery/4.png';
import img5 from '../../Images/gallery/5.png';
import img6 from '../../Images/gallery/6.png';
import img7 from '../../Images/latest/1.png';
import img8 from '../../Images/latest/2.png';
import img9 from '../../Images/latest/3.png';
import img10 from '../../Images/latest/4.png';
import img11 from '../../Images/latest/5.png';
import img12 from '../../Images/latest/6.png';

const Gallery = () => {
    return (
        <div className="max-w-7xl mx-auto mt-14">
            <h2 className="mb-10 font-bold text-3xl text-center">Toys <span className="text-orange-500">Gallery</span></h2>
            <marquee direction="left">
                <div className='flex gap-5'>
                    <img src={img1} alt="" className='w-64 h-48 border border-indigo-950 p-10 rounded-xl'/>
                    <img src={img2} alt="" className='w-64 h-48 border border-indigo-950 p-10 rounded-xl' />
                    <img src={img3} alt="" className='w-64 h-48 border border-indigo-950 p-10 rounded-xl'/>
                    <img src={img4} alt="" className='w-64 h-48 border border-indigo-950 p-10 rounded-xl' />
                    <img src={img5} alt="" className='w-64 h-48 border border-indigo-950 p-10 rounded-xl'/>
                    <img src={img6} alt="" className='w-64 h-48 border border-indigo-950 p-10 rounded-xl' />
                    <img src={img7} alt="" className='w-64 h-48 border border-indigo-950 p-10 rounded-xl'/>
                    <img src={img8} alt="" className='w-64 h-48 border border-indigo-950 p-10 rounded-xl' />
                    <img src={img9} alt="" className='w-64 h-48 border border-indigo-950 p-10 rounded-xl'/>
                    <img src={img10} alt="" className='w-64 h-48 border border-indigo-950 p-10 rounded-xl' />
                    <img src={img11} alt="" className='w-64 h-48 border border-indigo-950 p-10 rounded-xl'/>
                    <img src={img12} alt="" className='w-64 h-48 border border-indigo-950 p-10 rounded-xl'/>
                </div>
            </marquee>
        </div>
    );
};

export default Gallery;