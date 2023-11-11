// eslint-disable-next-line react/prop-types
const MenuItem = ({ item }) => {
    // eslint-disable-next-line react/prop-types
    const { recipe, name, image, price } = item;
    return (
        <div className="flex items-start space-x-4">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-24" src={image} alt="" />
            <div>
                <h2 className="font-bold">{name}----------</h2>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">{price}</p>
        </div>
    );
};

export default MenuItem;