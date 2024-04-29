import { Link, useLoaderData } from "react-router-dom";

const Crafts = () => {
  const paintings = useLoaderData();
  return (
    <div className="w-full">
      <h1 className=" text-center font-bold text-3xl my-20 bg-gradient-to-r from-red-500 from-10% via-yellow-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text">
        All Paintings
      </h1>
      <ul className="grid md:grid-cols-2 gap-10">
        {paintings.map((painting, index) => (
          <li key={index}>
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img className="h-52 w-52" src={painting.photo} alt="Movie" />
              </figure>
              <div className="card-body">
                <h2>Name: {painting.name}</h2>
                <p>Description: {painting.description}</p>
                <p>Price: {painting.price}</p>
                <div className="card-actions ">
                  <Link to={`/details`}>
                    {" "}
                    <button className="btn">View</button>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Crafts;
