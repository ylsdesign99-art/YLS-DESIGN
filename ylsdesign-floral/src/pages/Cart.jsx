import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cart, removeFromCart, clearCart, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-floral-700 mb-4">Your Cart</h1>
        <p className="text-gray-600 mb-8">Your cart is empty</p>
        <Link
          to="/shop"
          className="bg-floral-600 text-white px-6 py-2 rounded hover:bg-floral-700 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-floral-700 mb-8">Your Cart</h1>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-floral-600 text-white">
              <tr>
                <th className="p-4 text-left">Flower</th>
                <th className="p-4 text-left">Price</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.cartId} className="border-b hover:bg-gray-50">
                  <td className="p-4">{item.name}</td>
                  <td className="p-4">${item.price}</td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => removeFromCart(item.cartId)}
                      className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 bg-floral-50 p-6 rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <span className="text-2xl font-bold text-floral-700">Total:</span>
          <span className="text-3xl font-bold text-floral-600">${getTotalPrice()}</span>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => clearCart()}
            className="flex-1 bg-gray-400 text-white py-2 rounded hover:bg-gray-500 transition font-semibold"
          >
            Clear Cart
          </button>
          <button className="flex-1 bg-floral-600 text-white py-2 rounded hover:bg-floral-700 transition font-semibold">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
