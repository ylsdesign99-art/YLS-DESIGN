import ProductCard from '../components/ProductCard';
import { flowers } from '../data/flowers';

function Shop() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-floral-700 mb-4">Our Collection</h1>
      <p className="text-gray-600 mb-8">Browse our beautiful selection of fresh flowers</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {flowers.map((flower) => (
          <ProductCard key={flower.id} flower={flower} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
