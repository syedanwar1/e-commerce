import { useState } from "react";
import ShoppingList from "./shoppingList";


const Search = ({api}) => {
const products = api;
const [data,setData] = useState('');

console.log(api);

const searchForTheResult = (e) => {
    setData(e.target.value || ' ')
}

const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(data.toLowerCase()) ||
    product.description.toLowerCase().includes(data.toLowerCase())
  );

console.log(filteredProducts);


    return(<>
    <div className="w-full text-center">
    <input type='text' 
    value = {data}
    onChange={searchForTheResult}
    placeholder="Type here to search"
    className="rounded-md p-2 mx-auto"
    />
    </div>
    <div>
        {filteredProducts.map((product) => (
        <ShoppingList product={product} />
        ))}
    </div>
    </>
    )
}


export default Search;