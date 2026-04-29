import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-floral-500 to-floral-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to YLS Design Floral</h1>
          <p className="text-xl mb-8">Premium flowers for every occasion</p>
          <Link
            to="/shop"
            className="bg-white text-floral-600 px-8 py-3 rounded-lg font-bold hover:bg-floral-50 transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-floral-700">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🌹</div>
              <h3 className="text-xl font-bold mb-2">Fresh Flowers</h3>
              <p className="text-gray-600">Handpicked fresh flowers delivered daily</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Same-day delivery available in your area</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-xl font-bold mb-2">Custom Arrangements</h3>
              <p className="text-gray-600">Personalized bouquets for special moments</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
