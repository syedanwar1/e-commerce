const DisplayCart = ({tcart}) => {

return(
<>
<div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
        {tcart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            <ul>
              {tcart.map((item) => (
                <li key={item.id} className="flex justify-between mb-4">
                  <span>{item.title} (x{item.quantity})</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="text-right font-bold">
              Total: ${tcart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
            </div>
          </div>
        )}
      </div>
</>
);
}

export default DisplayCart;