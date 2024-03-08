const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVES SARHAD SHOES</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
          corporis deserunt ipsum aliquam, quibusdam deleniti delectus quaerat
          exercitationem consequatur accusamus distinctio rerum animi vero
          tempora facere illo adipisci nam temporibus.
        </p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shoping">
          <p>Available on</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="flipkar-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="hero-image" />
      </div>
    </main>
  );
};
export default HeroSection;
