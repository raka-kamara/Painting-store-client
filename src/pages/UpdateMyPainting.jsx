import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateMyPainting = () => {
    const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/singleProduct/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  }, [id]);

    
    return (
        <div className="container my-24 mx-auto ">
        <div className="card bg-base-100 shadow-xl md:w-fit mx-auto">
          <figure>
            <img
              src={product.photo}
              alt="Album"
              className="block object-cover object-center w-full md:w-[900px] rounded-md h-[500px] dark:bg-gray-500"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <p>Description: {product.description}</p>
            <hr />
            <p><span className="font-bold">Price: </span>{product.price}</p>
            <hr />
            <p><span className="font-bold">Rating: </span>{product.rating}</p>
            <hr />
            <table className="md:w-[500px]">
              <tr>
                <td className="opacity-80">Category:</td>
                <td className="font-bold">{product.category}</td>
              </tr>
              <tr>
                <td className="opacity-80">Processing Time:</td>
                <td className="font-bold">{product.time}</td>
              </tr>
              <tr>
                <td className="opacity-80">Processing Stock:</td>
                <td className="font-bold">{product.stock}</td>
              </tr>
              
            </table>
            <div className="card-actions justify-end gap-10">
              {/* <button onClick={handleRead} className="btn bg-white w-24 border">Read</button> */}
              {/* <button onClick={handleWishlist} className="btn w-24  bg-[#50B1C9] border-none text-white */}
              {/* ">Wishlist</button> */}
            </div>
          </div>
        </div>
      </div>
    );
};

export default UpdateMyPainting;