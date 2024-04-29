import Swal from "sweetalert2";
const AddCategory = () => {
  const handleAddPainting = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const stock = form.stock.value;
    const photo = form.photo.value;
    const category = form.category.value;
    const description = form.description.value;
    const time = form.time.value;

    const newPainting = {
      name,
      price,
      rating,
      customization,
      stock,
      photo,
      category,
      description,
      time,
    };
    console.log(newPainting);

    fetch("http://localhost:5000/category", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPainting),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-gradient-to-r from-slate-300 from-10% via-sky-300 via-30% to-yellow-100 to-90% p-24">
      <h2 className="text-3xl font-extrabold bg-gradient-to-r from-red-500 from-10% via-yellow-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text">
        Add a Painting
      </h2>
      <form
        onSubmit={handleAddPainting}
        className="border p-5 rounded-2xl mt-10"
      >
        {/* form name and price row */}
        <div className="md:flex mb-8 ">
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text">Painting Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Landscape,portrait, cartoon, etc"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-full  md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form subCategory and shortDescription row */}
        <div className="md:flex mb-8 ">
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text">Sub Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="Enter Your Kind of Painting"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-full  md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="Short Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form rating, customization*/}
        <div className="md:flex mb-8">
          <div className="form-control w-full  md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-full  md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Customization</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="customization"
                placeholder="Yes/No"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form stock and photo row */}
        <div className="md:flex mb-8">
          <div className="form-control w-full  md:w-1/2">
            <label className="label">
              <span className="label-text">Stock Status</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="stock"
                placeholder="In stock/ made to order"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-full  md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form Processing time row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="time"
                placeholder="Processing Time"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Add Painting"
          className="btn btn-block bg-gradient-to-r from-yellow-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% font-bold text-white"
        />
      </form>
    </div>
  );
};

export default AddCategory;
