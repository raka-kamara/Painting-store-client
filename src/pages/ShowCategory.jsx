import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ShowCategory = () => {
  const { category } = useParams();
  console.log(category);
  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setPaintings(data);
      })
      .catch((error) => {
        console.error("Error fetching paintings:", error);
      });
  }, [category]);

  return (
    <div>
      <h1 className="text-center font-bold text-3xl my-20 bg-gradient-to-r from-red-500 from-10% via-yellow-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text">Paintings in {category} Category</h1>
      <div className="grid md:grid-cols-2 gap-10">
        {paintings.map((painting) => (
          <div key={painting._id}>
            <div className="card card-compact h-96 w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={painting.photo}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{painting.name}</h2>
                <p>{painting.description}</p>
                <div className="card-actions justify-end">
                <Link to={`/categoryDetails/${painting._id}`}> <button className="btn ">See Dtails</button></Link>
               </div>
              </div>
            </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ShowCategory;
