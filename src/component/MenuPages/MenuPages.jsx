import Cover from "../../Cover/Cover";
import MenuCategory from "../../MenuCategory/MenuCategory";
import menuImage from '../../assets/menu/soup-bg.jpg';
import pizzaImage from '../../assets/menu/pizza-bg.jpg';
import soupImage from '../../assets/menu/soup-bg.jpg';
import saladImage from '../../assets/menu/salad-bg.jpg';
import desertImage from '../../assets/menu/dessert-bg.jpeg';
import useMenu from "../../hooks/useMenu";
const MenuPages = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            {/* main cover */}
            <div className="mb-16">
                <Cover img={menuImage} title={"our menu"}></Cover>
            </div>
            {/* offered */}
            <div className="text-center mb-16">
                <p className="text-[#D99904] mb-4 text-xl">---Dont miss---</p>
                <div className="w-[250px] h-[3px] bg-gray-300 mx-auto"></div>
                <h2 className="text-3xl font-semibold my-4">TODAYS OFFER</h2>
                <div className="w-[200px] h-[3px] bg-gray-300 mx-auto"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 mb-16">
                <MenuCategory items={offered}></MenuCategory>
            </div>
            {/* desert */}
            <div className="mb-16 max-w-7xl mx-auto">
                <Cover img={desertImage} title={"our menu"}></Cover>
            </div>
            <div className="max-w-7xl mx-auto px-4 mb-16">
                <MenuCategory items={dessert}></MenuCategory>
            </div>
            {/* pizza */}
            <div className="mb-16 max-w-7xl mx-auto">
                <Cover img={pizzaImage} title={"our menu"}></Cover>
            </div>
            <div className="max-w-7xl mx-auto px-4 mb-16">
                <MenuCategory items={pizza}></MenuCategory>
            </div>
            {/* soup */}
            <div className="mb-16 max-w-7xl mx-auto">
                <Cover img={soupImage} title={"our menu"}></Cover>
            </div>
            <div className="max-w-7xl mx-auto px-4 mb-16">
                <MenuCategory items={soup}></MenuCategory>
            </div>
            {/* salad */}
            <div className="mb-16 max-w-7xl mx-auto">
                <Cover img={saladImage} title={"our menu"}></Cover>
            </div>
            <div className="max-w-7xl mx-auto px-4 mb-16">
                <MenuCategory items={salad}></MenuCategory>
            </div>
        </div>
    );
};

export default MenuPages;