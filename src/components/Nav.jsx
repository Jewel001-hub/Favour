function Nav() {
  return (
    <nav className="w-full flex bg-black/95 justify-between py-4 px-10 ">
        <h1 className="text-white font-bold uppercase">Favour</h1>
        <ul className="text-gray-100 text-xl flex gap-10 uppercase font-medium">
            <li className="hover:text-blue-600"><a href="#"></a>Home</li>
            <li className="hover:text-blue-600"><a href="#"></a>Products</li>
            <li className="hover:text-blue-600"><a href=""></a>About Us</li>
            <li className="hover:text-blue-600"><a href="#"></a>Contact Us</li>
        </ul>


    <button className="bg-blue-600 text-white text-sm uppercase px-6 py-2 rounded-lg"> Let's Talk</button>
    </nav>
  )
}

export default Nav