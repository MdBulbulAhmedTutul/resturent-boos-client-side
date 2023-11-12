import { useState } from "react";
import Cover from "../../Cover/Cover";
import orderCover from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../hooks/useMenu";
import FoodCard from "../FoodCard/FoodCard";


const OurShopePage = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
            <div className="mb-16">
                <Cover img={orderCover} title={"OUR SHOP"}></Cover>
            </div>
            <div className="max-w-7xl mx-auto px-4 mb-16">
                <div className="tabs mx-auto mb-7 justify-center">
                    <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList>
                            <Tab>Salad</Tab>
                            <Tab>Pizza</Tab>
                            <Tab>Soup</Tab>
                            <Tab>Desserts</Tab>
                            <Tab>Drinks</Tab>
                        </TabList>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                                {
                                    salad.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                                {
                                    pizza.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                                {
                                    soup.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                                {
                                    dessert.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                                {
                                    drinks.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default OurShopePage;