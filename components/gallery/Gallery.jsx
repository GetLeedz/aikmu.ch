import Heading2 from '../headings/Heading2';
import Heading3 from '../headings/Heading3';
import Slider from '../slider/Slider';

const Gallery = () => (
    <section className="mt-[60px] lg:mt-[113px]" id="gallery">
        <div className="text-center w-full sm:w-7/12 m-auto">
            <Heading3>GetLeedz Gallery</Heading3>
            <Heading2>
                Our
                <span>Collections</span>
            </Heading2>
            <p className="mt-[5px]">NEW</p>
        </div>

        {/* slider here */}
        <Slider />
    </section>
);

export default Gallery;
