import useTitle from "../../TitleHook/TitleHook";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddToy = () => {

    useTitle('Add A Toy')
    const handleAddToy = (event) => {

        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const price = parseInt(form.price.value);
        const rating = form.rating.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newToy = { name, quantity, seller, email, price, rating, category, details, photo };
        // console.log(newToy);
        fetch('https://toyzone-server.vercel.app/allUsers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    toast.success('Successfully added');
                    event.target.reset();
                }
        })
    }
    return (
        <div className=" p-24">
            <h3 className='text-4xl font-bold text-center mb-16'>Add A <span className='text-orange-500'>Toy</span></h3>
            <form onSubmit={handleAddToy}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Toy name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form seller name and email row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="seller" placeholder="Seller Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="email" placeholder="Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form toy price and rating */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Sub - Category</span>
                        </label>
                        <label className="input-group">
                            {/* <input type="radio" name="category" placeholder="Teddy" className="input input-bordered w-full" /> */}
                            <select className="select select-bordered w-full" name="category">
                                <option value='Teddy Bear'>Teddy Bear</option>
                                <option value='Dinosaur'>Dinosaur</option>
                                <option value='Unicorn'>Unicorn</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL of The Toy</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <input type="submit" value="Add Toy" className=" btn bg-orange-600 border-0 w-1/2 " />
                </div>

            </form>
            <ToastContainer />
        </div>
    );
};

export default AddToy;