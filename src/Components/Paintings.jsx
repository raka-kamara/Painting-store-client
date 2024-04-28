const Paintings = ({ painting }) => {
  const { name, price, rating, customization, stock, photo } = painting;
  return (
    <div className="">
      
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="h-52 w-52"
            src={photo}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions ">
            <button className="btn">View</button>
            <button className="btn">Edit</button>
            <button className="btn bg-orange-500">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paintings;
