import { Link } from "react-router-dom";


const SubCategoryDinosaur = ({ dinosaur }) => {
    const { id, name, rating, price ,img } = dinosaur;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl h-48" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Ratings: {rating}</p>
                    <p>Price: {price}</p>
                    <div className="card-actions">
                        <Link to={`/${id}`}>
                            <button className="btn btn-primary">Show Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubCategoryDinosaur;