import React from "react";

const ProductList = ({ data, title }: { data: any; title?: string }) => {
  return (<div className="my-10">
    <h2 className="h2-bold mb-4">{title}</h2>
    {data.length > 0 ? ( <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
{data.map((product: any) => (
  <div key={product.id} className="border p-4 rounded-lg">
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
    <p className="text-gray-600 mb-4">${product.price}</p>
    <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
  </div>
))}
    </div>) : (
       
      <div>
      <p>No</p>
      </div>
    )}
  </div>);
};

export default ProductList;
