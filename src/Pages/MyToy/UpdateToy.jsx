import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../TitleHook/TitleHook';

const UpdateToy = () => {
    const userData = useLoaderData();
    console.log(userData);
    const pageName = userData.name + 'Update';
    useTitle(pageName);

    const updateHandler = event => {
        event.preventDefault();
        const form = event.target;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const details = form.details.value;
        console.log(quantity, price, details);
        const updatedUser = { quantity, price, details };

        fetch(`https://toyzone-server.vercel.app/allUsers/${userData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {
                    toast.success("Updated Successfully");
                }
            });
    }

    return (
        <div className="max-w-7xl mx-auto mt-14">
            <h2 className='font-bold text-center text-2xl'>UPDATE Your <span className='text-orange-500'>Toy</span> Information</h2>
            <form onSubmit={updateHandler}>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={userData.quantity} name="quantity" placeholder="Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={`${userData.price}`} name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={userData.details} name="details" placeholder="Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <input type="submit" value="UPDATE" className=" btn bg-orange-600 border-0 w-1/2 " />
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default UpdateToy;