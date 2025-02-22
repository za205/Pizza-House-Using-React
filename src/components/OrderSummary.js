const OrderSummary = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. Add items to your cart before proceeding.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="border-b py-2 flex justify-between">
              <span>{item.name}</span>
              <span>${item.price}</span>
            </div>
          ))}
          <div className="flex justify-between mt-4 text-xl font-semibold">
            <span>Total</span>
            <span>${total}</span>
          </div>
          <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded w-full">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
