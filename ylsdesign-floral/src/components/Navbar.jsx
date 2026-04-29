import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-floral-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold hover:text-floral-100">
            🌸 YLS Design Floral
          </Link>
          <ul className="flex gap-8">
            <li>
              <Link to="/" className="hover:text-floral-100 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-floral-100 transition">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-floral-100 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-floral-100 transition relative">
                Cart
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm">
                    {cart.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
