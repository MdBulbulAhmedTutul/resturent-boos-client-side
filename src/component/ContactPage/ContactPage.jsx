import Cover from "../../Cover/Cover";
import contactImage from '../../assets/contact/banner.jpg';

const ContactPage = () => {
    return (
        <div>
            <div>
                <Cover img={contactImage} title={"CONTACT US"}></Cover>
            </div>
        </div>
    );
};

export default ContactPage;