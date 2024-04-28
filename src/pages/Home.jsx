import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import BestSelling from "../Components/BestSelling";

import OurClasses from "../Components/OurClasses";
import Paintings from "../Components/Paintings";


const Home = () => {
    const paintings = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className="grid md:grid-cols-2 gap-10 my-20">
            {paintings.length}
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