import { FaFacebookSquare } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { BsTwitter } from 'react-icons/bs';
const Footer = () => {
    return (
        <footer>
            <div className="flex items-center flex-col md:flex-row justify-evenly">
                <div className="bg-[#1F2937] text-white w-full h-[200px] text-center py-10">
                    <h2>CONTACT US</h2>
                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                    <p>+88 123456789</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className="bg-[#111827] text-white w-full h-[200px] text-center py-10">
                    <h2>Follow US</h2>
                    <p>Join us on social media</p>
                    <div className='flex items-center justify-center mt-5'>
                        <a href=""><FaFacebookSquare className='text-2xl'></FaFacebookSquare></a>
                        <a href=""><FiInstagram className='text-2xl ml-2'></FiInstagram></a>
                        <a href=""><BsTwitter className='text-2xl ml-2'></BsTwitter></a>
                    </div>
                </div>
            </div>
            <div className="bg-[#151515] text-white text-center py-6">
                <h2>Copyright © CulinaryCloud. All rights reserved.</h2>
            </div>
        </footer>
    );
};

export default Footer;