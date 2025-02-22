// const Cart = ({ cart }) => {
//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold my-4">🛒 Your Cart</h2>
//       {cart.length === 0 ? (
//         <p className="text-lg">Your cart is empty. Please add some items.</p>
//       ) : (
//         cart.map((item, index) => (
//           <div
//             key={index}
//             className="border p-4 rounded mt-2 flex justify-between items-center"
//           >
//             <span>{item.name}</span>
//             <span>${item.price}</span>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Cart;
// import React from "react";

// const CartPage = ({ cart, removeFromCart, updateQuantity }) => {
//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         cart.map((item) => (
//           <div
//             key={item.id}
//             className="border p-4 rounded mt-4 flex justify-between"
//           >
//             <div>
//               <h3 className="text-xl font-bold">{item.name}</h3>
//               <p>
//                 ${item.price} x {item.quantity}
//               </p>
//             </div>
//             <div className="flex items-center">
//               <button
//                 className="mr-2 text-blue-500"
//                 onClick={() => updateQuantity(item.id, item.quantity + 1)}
//               >
//                 +
//               </button>
//               <button
//                 className="mr-2 text-blue-500"
//                 onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                 disabled={item.quantity <= 1}
//               >
//                 -
//               </button>
//               <button
//                 className="text-red-500"
//                 onClick={() => removeFromCart(item.id)}
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))
//       )}
//       {cart.length > 0 && (
//         <div className="mt-4">
//           <h3 className="text-xl font-bold">Total: ${total}</h3>
//           <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
//             Place Order
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;
import React from "react";

const CartPage = ({ cart, removeFromCart, updateQuantity }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold my-4">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="border p-2 rounded mt-2 flex justify-between"
          >
            <span>{item.name}</span>
            <div className="flex items-center">
              <button
                className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
              <div className="flex items-center space-x-2">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))
      )}
      <h3 className="text-xl font-bold mt-4">Total: ${total.toFixed(2)}</h3>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Place Order
      </button>
    </div>
  );
};

export default CartPage;

