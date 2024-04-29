import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyPainting = () => {
  const { user } = useAuth();
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCustomization, setSelectedCustomization] = useState("All");
  useEffect(() => {
    fetch(`http://localhost:5000/myPainting/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setFilteredItems(data);
      });
  }, [user]);

 const handleUpdate = (_id) =>{

 }

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/painting/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your painting has been deleted.", "success");
              const remaining = items.filter((cof) => cof._id !== _id);
              setItems(remaining);
            }
          });
      }
    });
  };

  const handleFilterChange = (customization) => {
    if (customization === "All") {
      setFilteredItems(items);
    } else {
      const filtered = items.filter(
        (item) =>
          item.customization.toLowerCase() === customization.toLowerCase()
      );
      setFilteredItems(filtered);
    }
    setSelectedCustomization(customization);
  };

  return (
    <div className="">
      <div>
        <label htmlFor="customization" className="font-bold">
          Filter by Customization:
        </label>
        <select
          id="customization"
          value={selectedCustomization}
          onChange={(e) => handleFilterChange(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      {filteredItems.map((p) => (
        <div className="card card-side bg-base-100 shadow-xl mt-5" key={p._id}>
          <figure>
            <img className="h-52 w-52" src={p.photo} alt="Painting" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name: {p.name}</h2>
            <h2 className="card-title">Price: {p.price}</h2>
            <p>Description: {p.description}</p>
            <p>Customization: {p.customization}</p>
            <div className="card-actions ">
              <Link to="/details">
                <button className="btn">View Details</button>
              </Link>
              <Link><button onClick={handleUpdate} className="btn">Edit</button></Link>
              <button
                onClick={() => handleDelete(p._id)}
                className="btn bg-orange-500"
              >
                X
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyPainting;
