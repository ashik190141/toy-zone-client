
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../TitleHook/TitleHook';

const AllToyDetails = () => {
    const toyData = useLoaderData();
    console.log(toyData);
    useTitle(toyData.name)
    return (
        // 
        <div>
            <div className='flex flex-col items-center justify-center mt-20'>
                <p className="text-xl font-bold">Seller Name: {toyData.seller}</p>
                <p className="text-xl font-bold">Email: {toyData.email}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto mt-14">
                <div className='bg-slate-800 p-5 rounded-xl text-white' data-aos="zoom-out-right">
                    <p className="font-bold text-4xl text-blue-600 mb-5">{toyData.title}</p>
                    <p className="font-bold text-3xl mb-3">{toyData.name}</p>
                    <p className="text-xl">Price: {toyData.price}</p>
                    <p className="text-xl">Quality: {toyData.quantity}</p>
                    <p className="mb-5 text-xl">Ratings: {toyData.rating}</p>
                    <p className="font-bold text-xl">{toyData.details}</p>
                </div>
                <div data-aos="zoom-out-left">
                    <img src={toyData.photo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AllToyDetails;