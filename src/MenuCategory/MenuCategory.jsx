import Cover from "../Cover/Cover";
import MenuItem from "../component/MenuItem/MenuItem";

// eslint-disable-next-line react/prop-types
const MenuCategory = ({ items, title, img }) => {
    return (
        <div>
            {
                title && <Cover img={img} title={title}></Cover>
            }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                {
                    // eslint-disable-next-line react/prop-types
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;