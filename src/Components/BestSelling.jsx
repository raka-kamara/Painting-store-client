import { Typewriter } from "react-simple-typewriter";
import Marquee from "react-fast-marquee";

const BestSelling = () => {
  return (
    <div>
      <h1
        className="text-center font-bold text-3xl mt-20"
       
      >
        Our Best Selling{" "}
        <span className="bg-gradient-to-r from-red-500 from-10% via-yellow-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text">
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[
              "Water color Paintings!",
              "Acrylic Paintings!",
              "Landscape Paintings!",
              "Skteches!",
              "and more...!",
            ]}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>

      <Marquee className="my-10">
       <img className="h-96 w-96 mx-5" src="https://i.ibb.co/vz9wSPP/b3.jpg" alt="" />
       <img className="h-96 w-96 mx-5" src="https://i.ibb.co/7YTN4S8/pexels-minan1398-1406863.jpg" alt="" />
       <img className="h-96 w-96 mx-5" src="https://i.ibb.co/YRPvDMS/pexels-george-desipris-1816529.jpg" alt="" />
       <img className="h-96 w-96 mx-5" src="https://i.ibb.co/2yrD0my/pexels-iriser-1005711.jpg" alt="" />
       <img className="h-96 w-96 mx-5" src="https://i.ibb.co/mCTFf3r/pexels-pixabay-164455.jpg" alt="" />
       <img className="h-96 w-96 mx-5" src="https://i.ibb.co/nwsYk18/mcgill-library-COph-CQKS660-unsplash.jpg" alt="" />
       <img className="h-96 w-96 mx-5" src="https://i.ibb.co/jMj756n/europeana-Tjeg-K-z-0j8-unsplash.jpg" alt="" />
      </Marquee>
    </div>
  );
};

export default BestSelling;





