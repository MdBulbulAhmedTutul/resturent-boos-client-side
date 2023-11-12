import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
const Testimonials = () => {
    const [ratings, setRatings] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setRatings(data))
    }, [])
    console.log(ratings)
    return (
        <div>
            <div className="text-center mb-16">
                <p className="text-[#D99904] mb-4 text-xl">---What Our Clients Say---</p>
                <div className="w-[300px] h-[3px] bg-gray-300 mx-auto"></div>
                <h2 className="text-3xl font-semibold my-4">TESTIMONIALS</h2>
                <div className="w-[200px] h-[3px] bg-gray-300 mx-auto"></div>
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    ratings.map(rating => <SwiperSlide className='text-center'
                        key={rating._id}
                    >
                        <div className='max-w-5xl mx-auto'>
                            <div className="rating mb-6">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            </div>
                            <p>{rating.details}</p>
                            <h2 className='text-xl font-semibold mt-4 text-yellow-500'>{rating.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;