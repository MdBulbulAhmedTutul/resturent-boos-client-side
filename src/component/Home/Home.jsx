import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import SubBanner from "../SubBanner/SubBanner";

const Home = () => {
    return (
        <div className=" px-4 my-16">
            <div>
                <Banner></Banner>
            </div>
            <div className="max-w-7xl mx-auto px-4 my-16">
                <div className="text-center mb-16">
                    <p className="text-[#D99904] mb-4 text-xl">---From 11:00am to 10:00pm---</p>
                    <div className="w-[300px] h-[3px] bg-gray-300 mx-auto"></div>
                    <h2 className="text-3xl font-semibold my-4">ORDER ONLINE</h2>
                    <div className="w-[200px] h-[3px] bg-gray-300 mx-auto"></div>
                </div>
                <Category></Category>
            </div>
            <div className="max-w-7xl mx-auto px-4 my-16">
                <SubBanner></SubBanner>
            </div>
            <div className="max-w-7xl mx-auto px-4 my-16">
                <div className="text-center mb-16">
                    <p className="text-[#D99904] mb-4 text-xl">---Check it out---</p>
                    <div className="w-[300px] h-[3px] bg-gray-300 mx-auto"></div>
                    <h2 className="text-3xl font-semibold my-4">FROM OUR MENU</h2>
                    <div className="w-[200px] h-[3px] bg-gray-300 mx-auto"></div>
                </div>
                <PopularMenu></PopularMenu>
            </div>
            <div className="my-16">
                <Featured></Featured>
            </div>
        </div>
    );
};

export default Home;