// eslint-disable-next-line react/prop-types
const FoodCard = ({ item }) => {
    // eslint-disable-next-line react/prop-types
    const { name, image, price, recipe } = item;
    return (
        <div className="relative card card-compact bg-base-100 shadow-xl">
            <figure><img className="w-full" src={image} /></figure>
            <p className="absolute right-5 top-5 bg-black text-white px-4 py-1  font-bold rounded-md">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline bg-[#E8E8E8] text-[#BB8506] border-0 border-b-4">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;