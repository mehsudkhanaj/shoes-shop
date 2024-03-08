const Navbar = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <a href="#">
            <li>Menu</li>
        </a>
        <a href="#">
            <li>Location</li>
        </a>
        <a href="#">
            <li>About</li>
        </a>
        <a href="#">
            <li>Contact</li>
        </a>
        
      </ul>
      <button>login</button>
    </nav>
  );
};
export default Navbar;
