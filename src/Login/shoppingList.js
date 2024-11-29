import DisplayCart from "./cart";
import { useState } from "react";


const ShoppingList = ({product}) => {
const [tcart,setCart] = useState([]);

const cart = (product) => {
    console.log(product);
    const existingProduct = tcart.find(item => item.id === product.id);
            
    if (existingProduct) {
      // If the product exists, increase the quantity
      setCart(tcart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
         // If the product doesn't exist in the cart, add it with quantity 1
      setCart([...tcart, { ...product, quantity: 1 }]);
     }}

return (
<div className="container mx-auto p-4">
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 shadow-sm border border-slate-200 rounded-lg w-auto">
  <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
    <img src={product.image} />
  </div>
  <div class="p-4">
    <h6 class="mb-2 text-slate-800 text-xl font-semibold">
      {product.title}
    </h6>
    <p class="text-slate-600 leading-normal font-light">
      {product.description}
    </p>
  </div>
  <div class="px-4 pb-4 mt-2">
    <button class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" onClick={() => {cart(product)}}>
      Add to cart
    </button>
  </div>
  <DisplayCart tcart={tcart} />
</div> 
</div>
)    
}

export default ShoppingList;