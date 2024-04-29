import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import BestSelling from "../Components/BestSelling";
import { Fade } from "react-awesome-reveal";
import OurClasses from "../Components/OurClasses";
import Paintings from "../Components/Paintings";



const Home = () => {
    const paintings = useLoaderData();
    return (
        <div className="p-5">
            <Banner></Banner>
           <Fade> <h1 className="text-center font-bold text-2xl mt-20
             bg-gradient-to-r from-blue-500 from-10% via-yellow-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text">Select Your desired Paintings</h1></Fade>
            <div className="grid md:grid-cols-2 gap-10 my-20">
             
            {
                paintings.map(painting => <Paintings
                key={painting._id}
                painting={painting}
                ></Paintings>)
            }
            </div>
            
            <BestSelling></BestSelling>
            <OurClasses></OurClasses>
        </div>
    );
};

export default Home;