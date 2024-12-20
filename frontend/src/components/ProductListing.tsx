import { products } from '@/utils/dummyData';
import Image from 'next/image';
import { ProductListProps } from '@/types/types';



export default function ProductList({ country }: ProductListProps) {
  const countryProducts = products.filter(product => product.country.toLowerCase() === country.toLowerCase());

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Snacks from {country}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {countryProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">
                  ${(product.price / 100).toFixed(2)}
                </span>
                <span className="text-sm text-gray-500">
                  {product.inventory_count} in stock
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}