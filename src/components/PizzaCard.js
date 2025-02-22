// import { useState } from "react";

// const PizzaCard = ({ pizza, addToCart }) => {
//   const [added, setAdded] = useState(false);

//   return (
//     <div className="border p-4 rounded shadow-md hover:shadow-lg transition-all">
//       <img
//         src={pizza.image}
//         alt={pizza.name}
//         className="w-full h-32 object-cover rounded"
//       />
//       <h2 className="text-xl font-bold mt-2">{pizza.name}</h2>
//       <p className="text-lg text-gray-700">${pizza.price}</p>
//       <button
//         className={`mt-2 px-4 py-2 w-full text-white rounded transition-all ${
//           added ? "bg-gray-500" : "bg-green-500 hover:bg-green-600"
//         }`}
//         onClick={() => {
//           addToCart(pizza);
//           setAdded(true);
//         }}
//       >
//         {added ? "Added" : "Add to Cart"}
//       </button>
//     </div>
//   );
// };

// export default PizzaCard;
// const PizzaCard = ({ pizza, addToCart }) => {
//   const [added, setAdded] = useState(false);

//   return (
//     <div className="border p-4 rounded shadow-md hover:shadow-lg transition-all">
//       <img
//         src={pizza.image}
//         alt={pizza.name}
//         className="w-full h-32 object-cover rounded"
//       />
//       <h2 className="text-xl font-bold mt-2">{pizza.name}</h2>
//       <p className="text-lg text-gray-700">${pizza.price}</p>
//       <button
//         className={`mt-2 px-4 py-2 w-full text-white rounded transition-all ${
//           added ? "bg-gray-500" : "bg-green-500 hover:bg-green-600"
//         }`}
//         onClick={() => {
//           addToCart(pizza);
//           setAdded(true);
//         }}
//       >
//         {added ? "Added" : "Add to Cart"}
//       </button>
//     </div>
//   );
// };
// import { useState } from 'react';

// const PizzaCard = ({ pizza, addToCart }) => {
//   const [added, setAdded] = useState(false);

//   return (
//     <div className="border p-4 rounded shadow-md hover:shadow-lg transition-all">
//       <img
//         src={pizza.image}
//         alt={pizza.name}
//         className="w-full h-32 object-cover rounded"
//       />
//       <h2 className="text-xl font-bold mt-2">{pizza.name}</h2>
//       <p className="text-lg text-gray-700">${pizza.price}</p>
//       <button
//         className={`mt-2 px-4 py-2 w-full text-white rounded transition-all ${
//           added ? "bg-gray-500" : "bg-green-500 hover:bg-green-600"
//         }`}
//         onClick={() => {
//           addToCart(pizza);
//           setAdded(true);
//         }}
//       >
//         {added ? "Added" : "Add to Cart"}
//       </button>
//     </div>
//   );
// };

// export default PizzaCard;  // <-- Default export added here

// import { useState } from "react";

// const PizzaCard = ({ pizza, addToCart }) => {
//   const [added, setAdded] = useState(false);

//   return (
//     <div className="border p-4 rounded shadow-md hover:shadow-lg transition-all">
//       <img
//         src={pizza.image}
//         alt={pizza.name}
//         className="w-full h-32 object-cover rounded"
//       />
//       <h2 className="text-xl font-bold mt-2">{pizza.name}</h2>
//       <p className="text-lg text-gray-700">${pizza.price}</p>
//       <button
//         className={`mt-2 px-4 py-2 w-full text-white rounded transition-all ${
//           added ? "bg-gray-500" : "bg-green-500 hover:bg-green-600"
//         }`}
//         onClick={() => {
//           addToCart(pizza);
//           setAdded(true);
//         }}
//       >
//         {added ? "Added" : "Add to Cart"}
//       </button>
//     </div>
//   );
// };

// export default PizzaCard;
// import { useState } from "react";

// const PizzaCard = ({ pizza, addToCart, cart }) => {
//   const [added, setAdded] = useState(false);

//   const pizzaInCart = cart.find((item) => item.id === pizza.id);

//   return (
//     <div className="border p-4 rounded shadow-md hover:shadow-lg transition-all">
//       <img
//         src={pizza.image}
//         alt={pizza.name}
//         className="w-full h-32 object-cover rounded"
//       />
//       <h2 className="text-xl font-bold mt-2">{pizza.name}</h2>
//       <p className="text-lg text-gray-700">${pizza.price}</p>
//       <button
//         className={`mt-2 px-4 py-2 w-full text-white rounded transition-all ${
//           added || pizzaInCart ? "bg-gray-500" : "bg-green-500"
//         }`}
//         onClick={() => {
//           addToCart(pizza);
//           setAdded(true);
//         }}
//       >
//         {added || pizzaInCart ? "Added" : "Add to Cart"}
//       </button>
//     </div>
//   );
// };

// export default PizzaCard;
// import React, { useState } from "react";

// const PizzaCard = ({ pizza, addToCart }) => {
//   const [added, setAdded] = useState(false);

//   const handleAddToCart = () => {
//     addToCart(pizza);
//     setAdded(true);
//   };

//   return (
//     <div className="border p-4 rounded shadow-md">
//       <img
//         src={pizza.image}
//         alt={pizza.name}
//         className="w-full h-32 object-cover rounded"
//       />
//       <h2 className="text-xl font-bold mt-2">{pizza.name}</h2>
//       <p className="text-lg text-gray-700">${pizza.price}</p>
//       <button
//         className={`mt-2 px-4 py-2 w-full text-white rounded ${
//           added ? "bg-gray-500" : "bg-green-500"
//         }`}
//         onClick={handleAddToCart}
//       >
//         {added ? "Added" : "Add to Cart"}
//       </button>
//     </div>
//   );
// };

// export default PizzaCard;
// import React, { useState } from "react";

// const PizzaCard = ({ pizza, addToCart, cart }) => {
//   // Check if the pizza is already in the cart
//   const isInCart = cart.some((item) => item.id === pizza.id);

//   const handleAddToCart = () => {
//     addToCart(pizza);
//   };

//   return (
//     <div className="border p-4 rounded shadow-md">
//       <img
//         src={pizza.image}
//         alt={pizza.name}
//         className="w-full h-32 object-cover rounded"
//       />
//       <h2 className="text-xl font-bold mt-2">{pizza.name}</h2>
//       <p className="text-lg text-gray-700">${pizza.price}</p>
//       <button
//         className={`mt-2 px-4 py-2 w-full text-white rounded ${
//           isInCart ? "bg-gray-500" : "bg-green-500"
//         }`}
//         onClick={handleAddToCart}
//         disabled={isInCart} // Disable button if pizza is already in cart
//       >
//         {isInCart ? "Added" : "Add to Cart"}
//       </button>
//     </div>
//   );
// };

// export default PizzaCard;
// import React from "react";

// const PizzaCard = ({ pizza, addToCart, cart }) => {
//   // Ensure cart is passed properly
//   if (!cart) return null;

//   // Check if the pizza is already in the cart
//   const isInCart = cart.some((item) => item.id === pizza.id);

//   const handleAddToCart = () => {
//     if (!isInCart) {
//       addToCart(pizza);
//     }
//   };

//   return (
//     <div className="border p-4 rounded shadow-md">
//       <img
//         src={pizza.image}
//         alt={pizza.name}
//         className="w-full h-32 object-cover rounded"
//       />
//       <h2 className="text-xl font-bold mt-2">{pizza.name}</h2>
//       <p className="text-lg text-gray-700">${pizza.price}</p>
//       <button
//         className={`mt-2 px-4 py-2 w-full text-white rounded ${
//           isInCart ? "bg-gray-500" : "bg-green-500"
//         }`}
//         onClick={handleAddToCart}
//         disabled={isInCart} // Disable button if pizza is already in cart
//       >
//         {isInCart ? "Added" : "Add to Cart"}
//       </button>
//     </div>
//   );
// };

// export default PizzaCard;
// import React from "react";

// const PizzaCard = ({ pizza, addToCart, cart }) => {
//   const isInCart = cart.some((item) => item.id === pizza.id);

//   const handleAddToCart = () => {
//     addToCart(pizza);
//   };

//   return (
//     <div className="border p-4 rounded shadow-md">
//       <img
//         src={pizza.image}
//         alt={pizza.name}
//         className="w-full h-32 object-cover rounded"
//       />
//       <h2 className="text-xl font-bold mt-2">{pizza.name}</h2>
//       <p className="text-lg text-gray-700">${pizza.price}</p>
//       <button
//         className={`mt-2 px-4 py-2 w-full text-white rounded ${
//           isInCart ? "bg-gray-500" : "bg-green-500"
//         }`}
//         onClick={handleAddToCart}
//         disabled={isInCart} // Disable button if pizza is already in cart
//       >
//         {isInCart ? "Added" : "Add to Cart"}
//       </button>
//     </div>
//   );
// };

// export default PizzaCard;
// import React, { useState } from "react";

// const PizzaCard = ({ pizza, addToCart, cart }) => {
//   const [isAdded, setIsAdded] = useState(false); // Track if item is added
//   const handleAddToCart = () => {
//     addToCart(pizza);
//     setIsAdded(true); // Change button color after adding
//   };

//   // Check if the pizza is already in the cart to update the quantity
//   const isPizzaInCart = cart.some((item) => item.id === pizza.id);

//   return (
//     <div className="bg-white p-4 rounded shadow-lg">
//       <img
//         src={pizza.image}
//         alt={pizza.name}
//         className="w-full h-40 object-cover rounded"
//       />
//       <h3 className="font-bold text-lg mt-2">{pizza.name}</h3>
//       <p className="text-gray-600">${pizza.price}</p>
//       <button
//         onClick={handleAddToCart}
//         className={`mt-3 px-4 py-2 rounded ${
//           isAdded ? "bg-green-500" : "bg-gray-500"
//         } text-white hover:bg-green-600`}
//       >
//         {isPizzaInCart ? "Added" : "Add to Cart"}
//       </button>
//     </div>
//   );
// };

// export default PizzaCard;
// import React, { useState } from "react";

// const PizzaCard = ({ pizza, addToCart, cart }) => {
//   const [isAdded, setIsAdded] = useState(false); // Track if item is added
//   const handleAddToCart = () => {
//     addToCart(pizza);
//     setIsAdded(true); // Change button color after adding
//   };

//   // Check if the pizza is already in the cart to update the quantity
//   const isPizzaInCart = cart.some((item) => item.id === pizza.id);

//   return (
//     <div className="bg-white p-4 rounded shadow-lg">
//       <img
//         src={pizza.image}
//         alt={pizza.name}
//         className="w-full h-40 object-cover rounded"
//       />
//       <h3 className="font-bold text-lg mt-2">{pizza.name}</h3>
//       <p className="text-gray-600">${pizza.price}</p>
//       <button
//         onClick={handleAddToCart}
//         className={`mt-3 px-4 py-2 rounded ${
//           isAdded ? "bg-green-500" : "bg-gray-500"
//         } text-white hover:bg-green-600`}
//       >
//         {isPizzaInCart ? "Added" : "Add to Cart"}
//       </button>
//     </div>
//   );
// };

// export default PizzaCard;

// import React, { useState } from "react";

// const PizzaCard = ({ pizza, addToCart, cart }) => {
//   const [isAdded, setIsAdded] = useState(false); // Track if item is added

//   const handleAddToCart = () => {
//     addToCart(pizza);
//     setIsAdded(true); // Change button color after adding
//   };

//   const isPizzaInCart = cart.some((item) => item.id === pizza.id); // Check if pizza is in the cart

//   return (
//     <div className="bg-white p-4 rounded shadow-lg">
//       <img
//         src={pizza.image}
//         alt={pizza.name}
//         className="w-full h-40 object-cover rounded"
//       />
//       <h3 className="font-bold text-lg mt-2">{pizza.name}</h3>
//       <p className="text-gray-600">${pizza.price}</p>
//       <button
//         onClick={handleAddToCart}
//         className={`mt-3 px-4 py-2 rounded ${
//           isAdded ? "bg-green-500" : "bg-gray-500"
//         } text-white hover:bg-green-600`}
//       >
//         {isPizzaInCart ? "Added" : "Add to Cart"}
//       </button>
//     </div>
//   );
// };

// export default PizzaCard;
// import React, { useState } from "react";

// const PizzaCard = ({ pizza, addToCart, cart }) => {
//   const [isSelected, setIsSelected] = useState(false);

//   const handleAddToCart = () => {
//     addToCart(pizza);
//     setIsSelected(true); // Change the state when the pizza is added to the cart
//   };

//   const handleRemoveFromCart = () => {
//     setIsSelected(false); // Reset selection if item is removed
//   };

//   return (
//     <div className="border p-4 rounded-lg shadow-lg relative">
//       <img
//         src={pizza.image}
//         alt={pizza.name}
//         className="w-full h-48 object-cover rounded-lg"
//       />
//       <div className="mt-4">
//         <h3 className="text-lg font-bold">{pizza.name}</h3>
//         <p className="text-gray-700">${pizza.price}</p>
//       </div>
//       <button
//         className={`mt-4 w-full py-2 rounded ${
//           isSelected ? "bg-gray-400" : "bg-green-500"
//         } text-white`}
//         onClick={handleAddToCart}
//         disabled={isSelected} // Disable the button if the item is already added
//       >
//         {isSelected ? "Added" : "Add to Cart"}
//       </button>
//       {isSelected && (
//         <button
//           className="absolute top-2 right-2 text-red-500"
//           onClick={handleRemoveFromCart}
//         >
//           Remove
//         </button>
//       )}
//     </div>
//   );
// };

// export default PizzaCard;
// import React from "react";

// const PizzaCard = ({ pizza, addToCart, cart, removeFromCart }) => {
//   const isInCart = cart.some((item) => item.id === pizza.id);

//   return (
//     <div className="border p-4 rounded-lg shadow-lg relative">
//       <img
//         src={pizza.image}
//         alt={pizza.name}
//         className="w-full h-48 object-cover rounded-lg"
//       />
//       <div className="mt-4">
//         <h3 className="text-lg font-bold">{pizza.name}</h3>
//         <p className="text-gray-700">${pizza.price}</p>
//       </div>
//       <button
//         className={`mt-4 w-full py-2 rounded ${
//           isInCart ? "bg-gray-400" : "bg-green-500"
//         } text-white`}
//         onClick={() => addToCart(pizza)}
//         disabled={isInCart}
//       >
//         {isInCart ? "Added" : "Add to Cart"}
//       </button>
//     </div>
//   );
// };

// export default PizzaCard;
// import React from "react";

// const PizzaCard = ({ pizza, addToCart, cart, removeFromCart }) => {
//   const isInCart = cart.some((item) => item.id === pizza.id);

//   return (
//     <div className="border p-4 rounded-lg shadow-lg relative">
//       <img
//         src={pizza.image}
//         alt={pizza.name}
//         className="w-full h-48 object-cover rounded-lg"
//       />
//       <div className="mt-4">
//         <h3 className="text-lg font-bold">{pizza.name}</h3>
//         <p className="text-gray-700">${pizza.price}</p>
//       </div>
//       <button
//         className={`mt-4 w-full py-2 rounded ${
//           isInCart ? "bg-gray-400" : "bg-green-500"
//         } text-white`}
//         onClick={() => addToCart(pizza)}
//         disabled={isInCart}
//       >
//         {isInCart ? "Added" : "Add to Cart"}
//       </button>
//     </div>
//   );
// };

// export default PizzaCard;
// import React from "react";

// const PizzaCard = ({ pizza, addToCart, cart, removeFromCart }) => {
//   const isInCart = cart.some((item) => item.id === pizza.id);

//   return (
//     <div className="border p-4 rounded-lg shadow-lg relative">
//       <img
//         src={pizza.image}
//         alt={pizza.name}
//         className="w-full h-48 object-cover rounded-lg"
//       />
//       <div className="mt-4">
//         <h3 className="text-lg font-bold">{pizza.name}</h3>
//         <p className="text-gray-700">${pizza.price}</p>
//       </div>
//       <button
//         className={`mt-4 w-full py-2 rounded ${
//           isInCart ? "bg-gray-400" : "bg-green-500"
//         } text-white`}
//         onClick={() => addToCart(pizza)}
//         disabled={isInCart}
//       >
//         {isInCart ? "Added" : "Add to Cart"}
//       </button>
//     </div>
//   );
// };

// export default PizzaCard;
// import React from "react";

// const PizzaCard = ({ pizza, addToCart, cart, removeFromCart }) => {
//   const isInCart = cart.some((item) => item.id === pizza.id);

//   return (
//     <div className="border p-4 rounded-lg shadow-lg relative">
//       <img
//         src={pizza.image}
//         alt={pizza.name}
//         className="w-full h-48 object-cover rounded-lg"
//       />
//       <div className="mt-4">
//         <h3 className="text-lg font-bold">{pizza.name}</h3>
//         <p className="text-gray-700">${pizza.price}</p>
//       </div>
//       <button
//         className={`mt-4 w-full py-2 rounded ${
//           isInCart ? "bg-gray-400" : "bg-green-500"
//         } text-white`}
//         onClick={() => addToCart(pizza)}
//         disabled={isInCart}
//       >
//         {isInCart ? "Added" : "Add to Cart"}
//       </button>
//     </div>
//   );
// };

// export default PizzaCard;
// import React from "react";

// const PizzaCard = ({ pizza, addToCart, cart, removeFromCart }) => {
//   const isInCart = cart.some((item) => item.id === pizza.id);

//   return (
//     <div className="border p-4 rounded-lg shadow-lg relative">
//       <img
//         src={pizza.image}
//         alt={pizza.name}
//         className="w-full h-48 object-cover rounded-lg"
//       />
//       <div className="mt-4">
//         <h3 className="text-lg font-bold">{pizza.name}</h3>
//         <p className="text-gray-700">${pizza.price}</p>
//       </div>
//       <button
//         className={`mt-4 w-full py-2 rounded ${
//           isInCart ? "bg-gray-400" : "bg-green-500"
//         } text-white`}
//         onClick={() => addToCart(pizza)}
//         disabled={isInCart}
//       >
//         {isInCart ? "Added" : "Add to Cart"}
//       </button>
//     </div>
//   );
// };

// export default PizzaCard;
import React, { useState } from "react";

const PizzaCard = ({ pizza, addToCart }) => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(pizza);
    setAdded(true);
  };

  return (
    <div className="border p-4 rounded shadow-md">
      <img
        src={pizza.image}
        alt={pizza.name}
        className="w-full h-32 object-cover rounded"
      />
      <h2 className="text-xl font-bold mt-2">{pizza.name}</h2>
      <p className="text-lg text-gray-700">${pizza.price}</p>
      <button
        className={`mt-2 px-4 py-2 w-full text-white rounded ${
          added ? "bg-gray-500" : "bg-green-500"
        }`}
        onClick={handleAddToCart}
      >
        {added ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
};

export default PizzaCard;

// import React, { useState } from "react";

// const PizzaCard = ({ pizza, addToCart, cart }) => {
//   // Check if the pizza is in the cart
//   const isAdded = cart.some((item) => item.id === pizza.id);

//   // Define styles for added and original states
//   const buttonStyle = {
//     backgroundColor: isAdded ? "green" : "blue", // Green if added, blue if not
//     color: "white",
//     padding: "10px 20px",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   };

//   // Handle button click to add/remove pizza from the cart
//   const handleButtonClick = () => {
//     if (isAdded) {
//       // If it's already in the cart, you could add functionality to remove it if needed
//       // You can create a removeFromCart function and pass it here
//       alert(`${pizza.name} is already in the cart`);
//     } else {
//       addToCart(pizza); // Add pizza to cart if not already added
//     }
//   };

//   return (
//     <div className="pizza-card">
//       <img src={pizza.image} alt={pizza.name} />
//       <h3>{pizza.name}</h3>
//       <p>{pizza.description}</p>
//       <p>${pizza.price}</p>

//       {/* Dynamic button */}
//       <button style={buttonStyle} onClick={handleButtonClick}>
//         {isAdded ? "Added to Cart" : "Add to Cart"}
//       </button>
//     </div>
//   );
// };

// export default PizzaCard;
