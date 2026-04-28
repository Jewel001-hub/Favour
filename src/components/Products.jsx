import white from "../assets/white.jpg";

function Products() {
  return (
    <section className="mx-10 my-10 ">
      <h2 className="text-2xl text-gray-700 text-center md:text-4xl uppercase font-semibold mb-7 tracking-tight">
        Featured Categories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="text-center">
          <img src={white} alt="" className="rounded-2xl w-full h-64 object-cover" />
          <p className="mt-3 text-lg font-medium">Luxury Furniture</p>
        </div>

        <div className="text-center">
          <img src={white} alt="" className="rounded-2xl w-full h-64 object-cover" />
          <p className="mt-3 text-lg font-medium">Modern Chairs</p>
        </div>

        <div className="text-center">
          <img src={white} alt="" className="rounded-2xl w-full h-64 object-cover" />
          <p className="mt-3 text-lg font-medium">Living Room Sets</p>
        </div>
        <div className="text-center">
          <img src={white} alt="" className="rounded-2xl w-full h-64 object-cover" />
          <p className="mt-3 text-lg font-medium">Living Room Sets</p>
        </div>
        <div className="text-center">
          <img src={white} alt="" className="rounded-2xl w-full h-64 object-cover" />
          <p className="mt-3 text-lg font-medium">Living Room Sets</p>
        </div>
        <div className="text-center">
          <img src={white} alt="" className="rounded-2xl w-full h-64 object-cover" />
          <p className="mt-3 text-lg font-medium">Living Room Sets</p>
        </div> 

      </div>
    </section>
  );
}

export default Products;