import img1 from '../../Images/latest/1.png';
import img2 from '../../Images/latest/6.png';
import img3 from '../../Images/latest/11.png';
import img4 from '../../Images/latest/14.png';
import websiteImage from '../../Images/logo/logo.png';
import { FaGoogle , FaGithub, FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-black mt-28'>
            <div className='flex items-center justify-center pt-10'>
                <div className="flex  md:flex-row flex-col gap-5 items-center">
                    <img src={websiteImage} alt="" className="w-32 bg-white rounded-xl" />
                    <p className="font-bold text-5xl text-white">Toy <span className="font-bold text-orange-500">Zone</span></p>
                </div>
            </div>
            <div className='text-white pt-20'>
                <p className='text-5xl font-bold text-center mb-5'>Animal Toys</p>
                <div className='flex md:flex-row flex-col items-center justify-center gap-10'>
                    <img src={img1} alt="" className='w-3/4 md:w-1/4 h-64 rounded-xl'/>
                    <img src={img2} alt="" className='w-3/4 md:w-1/4 h-64 rounded-xl'/>
                    <img src={img3} alt="" className='w-3/4 md:w-1/4 h-64 rounded-xl'/>
                    <img src={img4} alt="" className='w-3/4 md:w-1/4 h-64 rounded-xl'/>
                </div>
            </div>
            <div className='flex gap-3 items-center justify-center mt-10'>
                <FaFacebook className='me-2 text-white' />
                <FaGoogle className='me-2 text-white' />
                <FaGithub className='me-2 text-white' />
                <FaInstagram className='me-2 text-white' />
                <FaTwitter className='me-2 text-white' />
            </div>
            <div className='text-white flex md:flex-row flex-col items-center justify-center gap-8 mt-5'>
                <p>Advertising</p>
                <p>Terms and Condition</p>
                <p>Privacy Policy</p>
                <p>Hosted by ashik190141</p>
            </div>
            <div className='text-white flex md:flex-row flex-col items-center justify-center gap-5 mt-5 pb-20'>
                <p>@copyright 2023</p>
                <p>Developed by: Ahsan Mahmud Ashik</p>
            </div>
        </div>
    );
};

export default Footer;