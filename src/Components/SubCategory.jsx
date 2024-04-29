import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SubCategory = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="w-full">
      <Fade>
        <h1 className="text-center font-bold text-3xl my-20 bg-gradient-to-r from-red-500 from-10% via-yellow-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text">
          All Categories
        </h1>
      </Fade>
      <div className="grid md:grid-cols-3 gap-4">
        {product.map((p) => (
          <div key={p._id} >
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={p.photo}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{p.name}</h2>
                <p>{p.description}</p>
                <p className="font-bold">Sub-category: {p.category}</p>
                <div className="card-actions justify-end">
                 <Link to={`/categoryDetails/${p._id}`}> <button className="btn ">See Dtails</button></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCategory;
