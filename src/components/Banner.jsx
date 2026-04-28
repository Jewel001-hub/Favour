import white from "../assets/white.jpg";

function Banner() {
  return (
    <>
    <div>
      {/* Banner */}
        <section className="relative h-[89.2vh] bg-cover bg-center bg-no-repeat flex flex-col items-center     justify-center text-center pt-24" style={{ backgroundImage: `url(${white})`}}>

    {/* Overlay */}
      <div class="absolute inset-0 bg-linear-to-r from-black/35 to-transparent"></div>

    {/* Banner text */}
    <h1 className="text-center text-6xl font-bold uppercase text-white font-sans">Modern Comfort for <br />Every Home</h1>
    <p className="text-gray-700  text-2xl font-medium items-center justify-center bottom-6 font-serif">Discover furniture that blends style, function, and timeless design.</p>
    <hr className="w-24 border-t-2 border-white/70 mx-auto my-6" />
        </section>
    </div>
    </>
    );
}


export default Banner;