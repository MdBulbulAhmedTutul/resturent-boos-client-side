import { useEffect, useState } from "react";
import MenuItem from "../MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItem = data.filter(item => item.category === 'popular')
            setMenu(popularItem)})
    },[])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;