import fur from "../assets/fur.jpg";
function About() {
  return (
    <section className="py-20 ">
    <h2 className="text-center text-3xl md:text-4xl uppercase font-semibold mb-7 tracking-tight"> About Us</h2>
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2 gap-12">
        <div>
            <p className=" tracking-normal leading-relaxed text-lg font-sans">At Favour's Furniture   , we believe furniture is more than just décor — it’s the foundation of a comfortable and beautiful home. Our pieces are thoughtfully designed to combine <b><i>modern style, lasting quality, and everyday functionality.</i></b>

From elegant living room sets to carefully crafted accent pieces, we focus on creating furniture that transforms spaces and enhances the way people live. Every design is made with attention to detail, using materials that balance <i><b>durability, comfort, and timeless appeal.</b></i>

Our goal is simple: to help you create a home that reflects your style while delivering the comfort and quality you deserve.</p>
        </div>
           <div className="my-16 overflow-hidden">
        <img src={fur} alt="" className="w-full h-full rounded-2xl object-cover"/>
    </div>
    </div>
    </section>
  )
};

export default About;