import {  useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useTitle from "../../TitleHook/TitleHook";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyToy = () => {
    useTitle('My Toy');
    const [toys, setToys] = useState([]);
    const { user } = useContext(AuthContext);
    const url = `https://toyzone-server.vercel.app/specific?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data));
    }, [url])

    const handleDelete = id => {
        {
            fetch(`https://toyzone-server.vercel.app/allUsers/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Deleted successful');
                        const remaining = toys.filter(toy => toy._id !== id);
                        toys(remaining);
                    }
                })
        }
    }
    
    return (
        <div className="overflow-x-auto w-full mt-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>PHOTO</th>
                            <th>SELLER</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>SUB CATEGORY</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>UPDATE</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map((toy) => (
                                <tr key={toy._id}>
                                    <th>
                                        <img src={toy.photo} alt="" className="rounded w-24 h-24"/>
                                    </th>
                                    <th>{toy.seller}</th>
                                    <th>{toy.name}</th>
                                    <th>{toy.email}</th>
                                    <td>{toy.category}</td>
                                    <td>{toy.price}</td>
                                    <td>{toy.quantity}</td>
                                    <th>
                                        <Link to={`/myToy/${toy._id}`}>
                                            <button className="btn btn-success">Update</button>
                                        </Link>
                                    </th>
                                    <th>
                                        <button onClick={() => handleDelete(toy._id)} className="btn btn-warning">Delete</button>
                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>
            </table>
            <ToastContainer />
            </div>
    );
};

export default MyToy;