import Cover from "../../Cover/Cover";
import menuImage from '../../assets/menu/soup-bg.jpg';
const MenuPages = () => {
    return (
        <div>
            <div className="mb-16">
                <Cover img={menuImage} title={"our menu"}></Cover>
            </div>
        </div>
    );
};

export default MenuPages;