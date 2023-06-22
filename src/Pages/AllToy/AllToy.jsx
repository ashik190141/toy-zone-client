import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../TitleHook/TitleHook";


const AllToy = () => {
    useTitle('All Toy');
    const [searchText, setSearchText] = useState('');
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('https://toyzone-server.vercel.app/allUsers')
            .then(res => res.json())
            .then(data => setToys(data));
    },[])

    const handleSearch = () => {
        fetch(`https://toyzone-server.vercel.app/allUsers/${searchText}`)
            .then(res => res.json())
            .then(data => setToys(data));
    }

    return (
        <div className="max-w-7xl mx-auto mt-14">
            <div className="p-2 text-center">
                <input onChange={(e) => {
                    setSearchText(e.target.value)
                }}
                className='p-1 input input-bordered' placeholder="Enter Toy Name"
                    type="text" />
                <button onClick={handleSearch} className="btn ml-5">Search</button>
            </div>
            <div className="overflow-x-auto w-full mt-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SELLER</th>
                            <th>TOY NAME</th>
                            <th>SUB CATEGORY</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>DETAILS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map((toy) => (
                                <tr key={toy._id}>
                                    <th>{toy.seller}</th>
                                    <th>{toy.name}</th>
                                    <td>{toy.category}</td>
                                    <td>{toy.price}</td>
                                    <td>{toy.quantity}</td>
                                    <th>
                                        <Link to={`/allToy/${toy._id}`}>
                                            <button className="btn btn-success">View Details</button>
                                        </Link>
                                    </th> 
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToy;