import { useCart } from '../context/CartContext';

function ProductCard({ flower }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={flower.image}
        alt={flower.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-floral-700">{flower.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{flower.description}</p>
        
        {flower.colors && (
          <div className="flex gap-2 mb-3">
            {flower.colors.map((color) => (
              <span
                key={color}
                className="text-xs bg-floral-100 text-floral-700 px-2 py-1 rounded"
              >
                {color}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-floral-600">${flower.price}</span>
          <span className="text-sm text-gray-500">{flower.stems} stems</span>
        </div>
        
        <button
          onClick={() => addToCart(flower)}
          className="w-full mt-4 bg-floral-600 text-white py-2 rounded hover:bg-floral-700 transition font-semibold"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
