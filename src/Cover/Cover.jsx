import { Parallax } from 'react-parallax';
// eslint-disable-next-line react/prop-types
const Cover = ({ img, title }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[700px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ratione, atque rem repellendus similique cum non dignissimos cum non dignissimos.</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;