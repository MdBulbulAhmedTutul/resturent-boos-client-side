import subBanner from '../../assets/home/chef-service.jpg';
const SubBanner = () => {
    return (
        <div className='relative'>
            <img className='rounded-lg' src={subBanner} alt="" />
            <div className='hidden lg:block absolute bg-white w-[1000px] h-[300px] rounded-lg top-16 left-24'>
                <p className='font-bold text-center w-[700px] mx-auto mt-24'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default SubBanner;