import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

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

  const handleFilterChange = (customization) => {
    if (customization === "All") {
      setFilteredItems(items);
    } else {
      const filtered = items.filter(
        (item) => item.customization.toLowerCase() === customization.toLowerCase()
      );
      setFilteredItems(filtered);
    }
    setSelectedCustomization(customization);
  };

  return (
    <div className="">
      <div>
        <label htmlFor="customization" className="font-bold">Filter by Customization:</label>
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
            <div className="card-actions ">
             <Link to="/details"><button className="btn">View Details</button></Link> 
              <button className="btn">Edit</button>
              <button className="btn bg-orange-500">X</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyPainting;
