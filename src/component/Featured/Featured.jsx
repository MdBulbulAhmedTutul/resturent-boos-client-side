import fetaredImage from '../../assets/home/featured.jpg';
import './Featured.css';
const Featured = () => {
    return (
        <div className='featured_item'>
            <div className='max-w-7xl mx-auto'>
                <div className="text-center mb-16">
                    <p className="text-[#D99904] mb-4 text-xl">---Check it out---</p>
                    <div className="w-[300px] h-[3px] bg-gray-300 mx-auto"></div>
                    <h2 className="text-3xl font-semibold my-4">FROM OUR MENU</h2>
                    <div className="w-[200px] h-[3px] bg-gray-300 mx-auto"></div>
                </div>
                <div className='flex items-center flex-col lg:flex-row'>
                    <div>
                        <img src={fetaredImage} alt="" />
                    </div>
                    <div className='lg:ml-7'>
                        <h2>March 20, 2023 <br /> WHERE CAN I GET SOME</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;