// import { pizzas } from "../data";
// import PizzaCard from "../components/PizzaCard";

// const Home = ({ addToCart }) => {
//   return (
//     <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {pizzas.map((pizza) => (
//         <PizzaCard key={pizza.id} pizza={pizza} addToCart={addToCart} />
//       ))}
//     </div>
//   );
// };

// export default Home;
// import { pizzas } from "../data";
// import PizzaCard from "../components/PizzaCard";

// const Home = ({ addToCart }) => {
//   const pizzasList = pizzas.filter((item) => item.price >= 8); // Filter pizzas
//   const drinksList = pizzas.filter((item) => item.price < 8); // Filter drinks

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">🍕 Pizza House</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {pizzasList.map((pizza) => (
//           <PizzaCard key={pizza.id} pizza={pizza} addToCart={addToCart} />
//         ))}
//       </div>

//       <h2 className="text-2xl font-bold mt-8 mb-4">Drinks</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {drinksList.map((drink) => (
//           <PizzaCard key={drink.id} pizza={drink} addToCart={addToCart} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

// import { pizzas } from "../data";
// import PizzaCard from "../components/PizzaCard";

// const Home = ({ addToCart, cart }) => {
//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">🍕 Pizza House</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {pizzas.map((pizza) => (
//           <PizzaCard
//             key={pizza.id}
//             pizza={pizza}
//             addToCart={addToCart}
//             cart={cart}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
// import { pizzas } from "../data";
// import PizzaCard from "../components/PizzaCard";

// const Home = ({ addToCart, cart }) => {
//   return (
//     <div className="p-4 lg:p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//       <div className="col-span-full mb-4">
//         <h1 className="text-3xl font-bold text-center">🍕 Pizza House 🍕</h1>
//       </div>

//       {/* Mapping through the pizzas */}
//       {pizzas.map((pizza) => (
//         <PizzaCard key={pizza.id} pizza={pizza} addToCart={addToCart} />
//       ))}

//       {/* Cart preview */}
//       <div className="fixed top-0 right-0 p-4 bg-white shadow-lg rounded-l-lg z-10">
//         <div className="flex flex-col items-center">
//           <h3 className="font-semibold text-lg">🛒 Cart</h3>
//           <div className="mt-2">
//             {cart.length === 0 ? (
//               <p className="text-sm text-gray-500">Your cart is empty.</p>
//             ) : (
//               <ul className="space-y-2">
//                 {cart.map((item, index) => (
//                   <li key={index} className="text-sm">
//                     {item.name} x {item.quantity}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//           <button
//             className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//             onClick={() => {
//               if (cart.length > 0) {
//                 alert("Proceeding to checkout!");
//               } else {
//                 alert("Your cart is empty.");
//               }
//             }}
//           >
//             Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
// import React from "react";
// import { pizzas } from "../data";
// import PizzaCard from "../components/PizzaCard";

// const Home = ({ addToCart, cart }) => {
//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="p-4 flex">
//       <div className="w-full">
//         <h2 className="text-2xl font-bold mb-4">🍕 Pizza House</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {pizzas.map((pizza) => (
//             <PizzaCard key={pizza.id} pizza={pizza} addToCart={addToCart} />
//           ))}
//         </div>
//       </div>

//       {/* Cart summary on the right */}
//       <div className="w-1/4 bg-gray-100 p-4 ml-4 rounded shadow-lg">
//         <h2 className="text-lg font-semibold">Your Cart</h2>
//         <div>
//           {cart.length === 0 ? (
//             <p>Your cart is empty</p>
//           ) : (
//             <div>
//               {cart.map((item) => (
//                 <div key={item.id} className="flex justify-between py-2">
//                   <span>{item.name}</span>
//                   <span>
//                     {item.quantity} x ${item.price}
//                   </span>
//                 </div>
//               ))}
//               <h3 className="mt-2 font-semibold">Total: ${total.toFixed(2)}</h3>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
// import React from "react";
// import PizzaCard from "../components/PizzaCard"; // Adjust path if necessary
// import { pizzas } from "../data"; // Ensure this is the correct path

// const Home = ({ addToCart, cart }) => {
//   return (
//     <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//       {pizzas.map((pizza) => (
//         <PizzaCard
//           key={pizza.id}
//           pizza={pizza}
//           addToCart={addToCart}
//           cart={cart}
//         />
//       ))}
//     </div>
//   );
// };

// export default Home;
// import React from "react";
// import PizzaCard from "../components/PizzaCard"; // Adjust path if necessary
// import { pizzas } from "../data"; // Ensure this is the correct path

// const Home = ({ addToCart, cart, removeFromCart }) => {
//   return (
//     <div className="relative">
//       {/* Pizza cards */}
//       <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {pizzas.map((pizza) => (
//           <PizzaCard
//             key={pizza.id}
//             pizza={pizza}
//             addToCart={addToCart}
//             cart={cart}
//           />
//         ))}
//       </div>

//       {/* Cart section */}
//       <div
//         className="absolute top-10 right-4 bg-white p-4 rounded shadow-lg border border-gray-300 w-1/4 max-h-[80vh] overflow-auto"
//         style={{ zIndex: 10 }}
//       >
//         <h2 className="font-bold text-xl">Cart</h2>
//         <ul>
//           {cart.length === 0 ? (
//             <li>Your cart is empty.</li>
//           ) : (
//             cart.map((item) => (
//               <li key={item.id} className="flex justify-between items-center">
//                 <span>
//                   {item.name} x {item.quantity}
//                 </span>
//                 <button
//                   onClick={() => removeFromCart(item.id)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))
//           )}
//         </ul>
//         <div className="mt-4">
//           <strong>
//             Total: $
//             {cart
//               .reduce((total, item) => total + item.price * item.quantity, 0)
//               .toFixed(2)}
//           </strong>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
// import React from "react";
// import PizzaCard from "../components/PizzaCard"; // Adjust path if necessary
// import { pizzas } from "../data"; // Ensure this is the correct path

// const Home = ({ addToCart, cart, removeFromCart }) => {
//   return (
//     <div className="relative">
//       {/* Pizza cards */}
//       <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {pizzas.map((pizza) => (
//           <PizzaCard
//             key={pizza.id}
//             pizza={pizza}
//             addToCart={addToCart}
//             cart={cart}
//           />
//         ))}
//       </div>

//       {/* Cart section */}
//       <div
//         className="absolute top-10 right-4 bg-white p-4 rounded shadow-lg border border-gray-300 w-1/5 sm:w-1/4 max-h-[80vh] overflow-auto"
//         style={{ zIndex: 10 }}
//       >
//         <h2 className="font-bold text-xl">Cart</h2>
//         <ul>
//           {cart.length === 0 ? (
//             <li>Your cart is empty.</li>
//           ) : (
//             cart.map((item) => (
//               <li key={item.id} className="flex justify-between items-center">
//                 <span>
//                   {item.name} x {item.quantity}
//                 </span>
//                 <button
//                   onClick={() => removeFromCart(item.id)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))
//           )}
//         </ul>
//         <div className="mt-4">
//           <strong>
//             Total: $
//             {cart
//               .reduce((total, item) => total + item.price * item.quantity, 0)
//               .toFixed(2)}
//           </strong>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


// import React from "react";
// import PizzaCard from "../components/PizzaCard"; // Adjust path if necessary
// import { pizzas } from "../data"; // Ensure this is the correct path

// const Home = ({ addToCart, cart, removeFromCart }) => {
//   return (
//     <div className="flex flex-wrap p-4">
//       {/* Pizza Cards Section */}
//       <div className="w-full sm:w-3/4 lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {pizzas.map((pizza) => (
//           <PizzaCard
//             key={pizza.id}
//             pizza={pizza}
//             addToCart={addToCart}
//             cart={cart}
//           />
//         ))}
//       </div>

//       {/* Cart Section */}
//       <div
//         className="w-full sm:w-1/4 lg:w-1/4 bg-white p-4 rounded shadow-lg border border-gray-300 max-h-[80vh] overflow-auto"
//         style={{
//           position: "sticky",
//           top: "10px", // Keeps cart at top of the page
//           right: "0",
//           zIndex: 10,
//         }}
//       >
//         <h2 className="font-bold text-xl">Cart</h2>
//         <ul>
//           {cart.length === 0 ? (
//             <li>Your cart is empty.</li>
//           ) : (
//             cart.map((item) => (
//               <li key={item.id} className="flex justify-between items-center">
//                 <span>
//                   {item.name} x {item.quantity}
//                 </span>
//                 <button
//                   onClick={() => removeFromCart(item.id)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))
//           )}
//         </ul>
//         <div className="mt-4">
//           <strong>
//             Total: $
//             {cart
//               .reduce((total, item) => total + item.price * item.quantity, 0)
//               .toFixed(2)}
//           </strong>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
// import React from "react";
// import PizzaCard from "../components/PizzaCard"; // Ensure this path is correct
// import { pizzas } from "../data"; // Make sure data is correctly imported

// const Home = ({ addToCart, cart, removeFromCart }) => {
//   return (
//     <div className="flex p-4">
//       {/* Pizza Cards Section */}
//       <div className="w-full sm:w-3/4 lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {pizzas.map((pizza) => (
//           <PizzaCard
//             key={pizza.id}
//             pizza={pizza}
//             addToCart={addToCart}
//             cart={cart}
//           />
//         ))}
//       </div>

//       {/* Cart Section */}
//       <div
//         className="w-1/4 p-2 bg-white shadow-lg rounded border border-gray-300 fixed top-0 right-0 h-full overflow-y-auto"
//         style={{
//           zIndex: 10,
//           height: "100vh", // Full height to make sure cart stays visible
//         }}
//       >
//         <h2 className="font-bold text-xl text-center mt-4">🛒 Your Cart</h2>
//         <ul className="mt-6">
//           {cart.length === 0 ? (
//             <li className="text-center">Your cart is empty.</li>
//           ) : (
//             cart.map((item) => (
//               <li
//                 key={item.id}
//                 className="flex justify-between items-center mb-3"
//               >
//                 <span>
//                   {item.name} x {item.quantity}
//                 </span>
//                 <div className="flex items-center">
//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     className="text-red-500 hover:text-red-700 ml-2"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </li>
//             ))
//           )}
//         </ul>
//         <div className="mt-4">
//           <strong>
//             Total: $
//             {cart
//               .reduce((total, item) => total + item.price * item.quantity, 0)
//               .toFixed(2)}
//           </strong>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
// import React from "react";
// import PizzaCard from "../components/PizzaCard"; // Ensure this path is correct
// import { pizzas } from "../data"; // Make sure data is correctly imported

// const Home = ({ addToCart, cart, removeFromCart }) => {
//   return (
//     <div className="relative">
//       {/* Top Navigation Section */}
//       <div className="flex justify-between items-center bg-white p-4 shadow-md">
//         <h1 className="text-xl font-bold">Pizza House 🍕</h1>
//         {/* Cart Section */}
//         <div className="flex items-center justify-center bg-gray-800 text-white p-2 rounded-xl w-1/4">
//           <span className="mr-2">🛒</span>
//           <h2 className="text-lg font-semibold">Your Cart</h2>
//         </div>
//       </div>

//       {/* Pizza Cards Section */}
//       <div className="w-full sm:w-3/4 lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//         {pizzas.map((pizza) => (
//           <PizzaCard
//             key={pizza.id}
//             pizza={pizza}
//             addToCart={addToCart}
//             cart={cart}
//           />
//         ))}
//       </div>

//       {/* Cart Section at the Bottom (Optional) */}
//       <div className="w-full bg-white p-4 fixed bottom-0 right-0 shadow-lg">
//         <h2 className="font-bold text-xl">🛒 Your Cart</h2>
//         <ul className="mt-6">
//           {cart.length === 0 ? (
//             <li className="text-center">Your cart is empty.</li>
//           ) : (
//             cart.map((item) => (
//               <li
//                 key={item.id}
//                 className="flex justify-between items-center mb-3"
//               >
//                 <span>
//                   {item.name} x {item.quantity}
//                 </span>
//                 <div className="flex items-center">
//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     className="text-red-500 hover:text-red-700 ml-2"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </li>
//             ))
//           )}
//         </ul>
//         <div className="mt-4">
//           <strong>
//             Total: $
//             {cart
//               .reduce((total, item) => total + item.price * item.quantity, 0)
//               .toFixed(2)}
//           </strong>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
// import React, { useState } from "react";
// import PizzaCard from "../components/PizzaCard"; // Ensure this path is correct
// import { pizzas } from "../data"; // Ensure data is correctly imported

// const Home = ({ addToCart, cart, removeFromCart }) => {
//   const [isCartVisible, setIsCartVisible] = useState(false); // State to toggle cart visibility

//   const toggleCart = () => {
//     setIsCartVisible(!isCartVisible);
//   };

//   return (
//     <div className="relative">
//       {/* Top Navigation Section */}
//       <div className="flex justify-between items-center bg-white p-4 shadow-md">
//         <h1 className="text-xl font-bold">Pizza House 🍕</h1>
//         {/* Cart Section */}
//         <div
//           className="flex items-center justify-center bg-gray-800 text-white p-2 rounded-xl w-1/4 cursor-pointer"
//           onClick={toggleCart}
//         >
//           <span className="mr-2">🛒</span>
//           <h2 className="text-lg font-semibold">Your Cart</h2>
//         </div>
//       </div>

//       {/* Pizza Cards Section */}
//       <div className="w-full sm:w-3/4 lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//         {pizzas.map((pizza) => (
//           <PizzaCard
//             key={pizza.id}
//             pizza={pizza}
//             addToCart={addToCart}
//             cart={cart}
//           />
//         ))}
//       </div>

//       {/* Cart Section - Overlay when clicked */}
//       {isCartVisible && (
//         <div className="absolute top-0 right-0 w-64 bg-white p-4 shadow-lg rounded-xl z-10">
//           <h2 className="font-bold text-xl mb-4">🛒 Your Cart</h2>
//           <ul>
//             {cart.length === 0 ? (
//               <li className="text-center">Your cart is empty.</li>
//             ) : (
//               cart.map((item) => (
//                 <li
//                   key={item.id}
//                   className="flex justify-between items-center mb-3 border-b pb-2"
//                 >
//                   <span>
//                     {item.name} x {item.quantity}
//                   </span>
//                   <div className="flex items-center">
//                     <button
//                       onClick={() => removeFromCart(item.id)}
//                       className="text-red-500 hover:text-red-700 ml-2"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </li>
//               ))
//             )}
//           </ul>
//           <div className="mt-4">
//             <strong>
//               Total: $
//               {cart
//                 .reduce((total, item) => total + item.price * item.quantity, 0)
//                 .toFixed(2)}
//             </strong>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;
// import React, { useState } from "react";
// import PizzaCard from "../components/PizzaCard"; // Ensure this path is correct
// import { pizzas } from "../data"; // Ensure data is correctly imported

// const Home = ({ addToCart, cart, removeFromCart }) => {
//   const [isCartVisible, setIsCartVisible] = useState(false); // State to toggle cart visibility

//   const toggleCart = () => {
//     setIsCartVisible(!isCartVisible);
//   };

//   return (
//     <div className="relative">
//       {/* Top Navigation Section */}
//       <div className="flex justify-between items-center bg-white p-4 shadow-md">
//         <h1 className="text-xl font-bold">Pizza House 🍕</h1>
//         {/* Cart Section */}
//         <div
//           className="flex items-center justify-center bg-gray-800 text-white p-2 rounded-xl w-1/4 cursor-pointer relative"
//           onClick={toggleCart}
//         >
//           <span className="mr-2">🛒</span>
//           <h2 className="text-lg font-semibold">Your Cart</h2>
//           {/* Cart Dropdown */}
//           {isCartVisible && (
//             <div className="absolute right-0 top-12 bg-white p-4 shadow-lg rounded-xl w-64 z-20 max-h-72 overflow-y-auto">
//               <h2 className="font-bold text-xl mb-4">🛒 Your Cart</h2>
//               <ul>
//                 {cart.length === 0 ? (
//                   <li className="text-center">Your cart is empty.</li>
//                 ) : (
//                   cart.map((item) => (
//                     <li
//                       key={item.id}
//                       className="flex justify-between items-center mb-3 border-b pb-2"
//                     >
//                       <span>
//                         {item.name} x {item.quantity}
//                       </span>
//                       <div className="flex items-center">
//                         <button
//                           onClick={() => removeFromCart(item.id)}
//                           className="text-red-500 hover:text-red-700 ml-2"
//                         >
//                           Remove
//                         </button>
//                       </div>
//                     </li>
//                   ))
//                 )}
//               </ul>
//               <div className="mt-4">
//                 <strong>
//                   Total: $
//                   {cart
//                     .reduce(
//                       (total, item) => total + item.price * item.quantity,
//                       0
//                     )
//                     .toFixed(2)}
//                 </strong>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Pizza Cards Section */}
//       <div className="w-full sm:w-3/4 lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//         {pizzas.map((pizza) => (
//           <PizzaCard
//             key={pizza.id}
//             pizza={pizza}
//             addToCart={addToCart}
//             cart={cart}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
// import React, { useState } from "react";
// import PizzaCard from "../components/PizzaCard"; // Ensure this path is correct
// import { pizzas } from "../data"; // Ensure data is correctly imported

// const Home = ({ addToCart, cart, removeFromCart, updateQuantity }) => {
//   const [isCartVisible, setIsCartVisible] = useState(false); // State to toggle cart visibility

//   const toggleCart = () => {
//     setIsCartVisible(!isCartVisible);
//   };

//   return (
//     <div className="relative">
//       {/* Top Navigation Section */}
//       <div className="flex justify-between items-center bg-white p-4 shadow-md">
//         <h1 className="text-xl font-bold">Pizza House 🍕</h1>
//         {/* Cart Section */}
//         <div
//           className="flex items-center justify-center bg-gray-800 text-white p-2 rounded-xl w-1/4 cursor-pointer relative"
//           onClick={toggleCart}
//         >
//           <span className="mr-2">🛒</span>
//           <h2 className="text-lg font-semibold">Your Cart</h2>
//           {/* Cart Dropdown */}
//           {isCartVisible && (
//             <div className="absolute right-0 top-12 bg-white p-4 shadow-lg rounded-xl w-64 z-20 max-h-72 overflow-y-auto">
//               <h2 className="font-bold text-xl mb-4">🛒 Your Cart</h2>
//               <ul>
//                 {cart.length === 0 ? (
//                   <li className="text-center">Your cart is empty.</li>
//                 ) : (
//                   cart.map((item) => (
//                     <li
//                       key={item.id}
//                       className="flex justify-between items-center mb-3 border-b pb-2"
//                     >
//                       <span>
//                         {item.name} x {item.quantity}
//                       </span>
//                       <div className="flex items-center">
//                         <button
//                           onClick={() =>
//                             updateQuantity(item.id, item.quantity - 1)
//                           }
//                           className="text-blue-500 hover:text-blue-700 ml-2"
//                         >
//                           -
//                         </button>
//                         <button
//                           onClick={() =>
//                             updateQuantity(item.id, item.quantity + 1)
//                           }
//                           className="text-blue-500 hover:text-blue-700 ml-2"
//                         >
//                           +
//                         </button>
//                         <button
//                           onClick={() => removeFromCart(item.id)}
//                           className="text-red-500 hover:text-red-700 ml-2"
//                         >
//                           Remove
//                         </button>
//                       </div>
//                     </li>
//                   ))
//                 )}
//               </ul>
//               <div className="mt-4">
//                 <strong>
//                   Total: $
//                   {cart
//                     .reduce(
//                       (total, item) => total + item.price * item.quantity,
//                       0
//                     )
//                     .toFixed(2)}
//                 </strong>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Pizza Cards Section */}
//       <div className="w-full sm:w-3/4 lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//         {pizzas.map((pizza) => (
//           <PizzaCard
//             key={pizza.id}
//             pizza={pizza}
//             addToCart={addToCart}
//             cart={cart}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
// import React, { useState } from "react";
// import PizzaCard from "../components/PizzaCard"; // Adjust if necessary
// import { pizzas } from "../data"; // Assuming the pizza data is here

// const Home = ({ addToCart, cart, removeFromCart }) => {
//   return (
//     <div className="relative">
//       {/* Top Navigation Section */}
//       <div className="flex justify-between items-center bg-white p-4 shadow-md">
//         <h1 className="text-xl font-bold">Pizza House 🍕</h1>
//         {/* Cart Section */}
//         <div
//           className="flex items-center justify-center bg-gray-800 text-white p-2 rounded-xl w-1/4 cursor-pointer"
//           onClick={() => console.log("Cart clicked")}
//         >
//           <span className="mr-2">🛒</span>
//           <h2 className="text-lg font-semibold">Your Cart</h2>
//         </div>
//       </div>

//       {/* Pizza Cards Section */}
//       <div className="w-full sm:w-3/4 lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//         {pizzas.map((pizza) => (
//           <PizzaCard
//             key={pizza.id}
//             pizza={pizza}
//             addToCart={addToCart}
//             cart={cart}
//             removeFromCart={removeFromCart}
//           />
//         ))}
//       </div>

//       {/* Cart display section */}
//       <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
//         <h2 className="font-bold text-xl">🛒 Your Cart</h2>
//         {cart.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <ul>
//             {cart.map((item) => (
//               <li
//                 key={item.id}
//                 className="flex justify-between items-center mb-3"
//               >
//                 <span>{item.name}</span>
//                 <button
//                   onClick={() => removeFromCart(item.id)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )}
//         <strong>
//           Total: $
//           {cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
//         </strong>
//       </div>
//     </div>
//   );
// };

// export default Home;
// import React from "react";
// import PizzaCard from "../components/PizzaCard"; // Adjust if necessary
// import { pizzas } from "../data"; // Assuming the pizza data is here

// const Home = ({ addToCart, cart, removeFromCart }) => {
//   return (
//     <div className="relative">
//       {/* Top Navigation Section */}
//       <div className="flex justify-between items-center bg-white p-4 shadow-md">
//         <h1 className="text-xl font-bold">Pizza House 🍕</h1>
//         <div className="flex items-center">
//           {/* Home Button */}
//           <button
//             className="text-lg mr-4"
//             onClick={() => console.log("Home clicked")}
//           >
//             Home
//           </button>
//           {/* Cart Button */}
//           <div
//             className="flex items-center justify-center bg-gray-800 text-white p-2 rounded-xl cursor-pointer"
//             onClick={() => console.log("Cart clicked")}
//           >
//             <span className="mr-2">🛒</span>
//             <span>{cart.length}</span> {/* Display number of items */}
//           </div>
//         </div>
//       </div>

//       {/* Pizza Cards Section */}
//       <div className="w-full sm:w-3/4 lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//         {pizzas.map((pizza) => (
//           <PizzaCard
//             key={pizza.id}
//             pizza={pizza}
//             addToCart={addToCart}
//             cart={cart}
//             removeFromCart={removeFromCart}
//           />
//         ))}
//       </div>

//       {/* Cart Display Section */}
//       {cart.length > 0 && (
//         <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
//           <h2 className="font-bold text-xl">🛒 Your Cart</h2>
//           <ul>
//             {cart.map((item) => (
//               <li
//                 key={item.id}
//                 className="flex justify-between items-center mb-3"
//               >
//                 <span>{item.name}</span>
//                 <button
//                   onClick={() => removeFromCart(item.id)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <strong>
//             Total: $
//             {cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
//           </strong>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;
// import React from "react";
// import PizzaCard from "../components/PizzaCard"; // Adjust if necessary
// import { pizzas } from "../data"; // Assuming the pizza data is here

// const Home = ({ addToCart, cart, removeFromCart }) => {
//   return (
//     <div>
//       {/* Top Navigation Section */}
//       <div className="flex justify-between items-center bg-dark-blue text-white p-4 shadow-md">
//         <div className="flex">
//           {/* Home Button */}
//           <button
//             className="text-lg font-bold mr-6"
//             onClick={() => console.log("Home clicked")}
//           >
//             Home
//           </button>
//           {/* Cart Button */}
//           <button
//             className="text-lg font-bold"
//             onClick={() => console.log("Cart clicked")}
//           >
//             Cart ({cart.length})
//           </button>
//         </div>
//       </div>

//       {/* Pizza Cards Section */}
//       <div className="w-full sm:w-3/4 lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//         {pizzas.map((pizza) => (
//           <PizzaCard
//             key={pizza.id}
//             pizza={pizza}
//             addToCart={addToCart}
//             cart={cart}
//             removeFromCart={removeFromCart}
//           />
//         ))}
//       </div>

//       {/* Cart Display Section */}
//       {cart.length > 0 && (
//         <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
//           <h2 className="font-bold text-xl">🛒 Your Cart</h2>
//           <ul>
//             {cart.map((item) => (
//               <li
//                 key={item.id}
//                 className="flex justify-between items-center mb-3"
//               >
//                 <span>{item.name}</span>
//                 <button
//                   onClick={() => removeFromCart(item.id)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <strong>
//             Total: $
//             {cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
//           </strong>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;
// import React from "react";
// import PizzaCard from "../components/PizzaCard"; // Adjust if needed
// import { pizzas } from "../data"; // Assuming pizza data is here

// const Home = ({ addToCart, cart, removeFromCart }) => {
//   return (
//     <div>
//       {/* Top Navigation Section */}
//       <div className="bg-dark-navy text-white p-4 shadow-md fixed top-0 left-0 right-0 z-50">
//         <div className="flex justify-between items-center">
//           <div className="flex space-x-8">
//             {/* Home Button */}
//             <button
//               className="text-lg font-bold"
//               onClick={() => console.log("Home clicked")}
//             >
//               Home
//             </button>
//             {/* Cart Button */}
//             <button
//               className="text-lg font-bold"
//               onClick={() => console.log("Cart clicked")}
//             >
//               Cart ({cart.length})
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Main Pizza Cards Section */}
//       <div className="pt-16 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {pizzas.map((pizza) => (
//           <PizzaCard
//             key={pizza.id}
//             pizza={pizza}
//             addToCart={addToCart}
//             cart={cart}
//             removeFromCart={removeFromCart}
//           />
//         ))}
//       </div>

//       {/* Cart Section */}
//       {cart.length > 0 && (
//         <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
//           <h2 className="font-bold text-xl">🛒 Your Cart</h2>
//           <ul>
//             {cart.map((item) => (
//               <li
//                 key={item.id}
//                 className="flex justify-between items-center mb-3"
//               >
//                 <span>{item.name}</span>
//                 <button
//                   onClick={() => removeFromCart(item.id)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <strong>
//             Total: $
//             {cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
//           </strong>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;
// import React from "react";
// import PizzaCard from "../components/PizzaCard"; // Assuming you have a PizzaCard component
// import { pizzas } from "../data"; // Your pizza data

// const Home = ({ addToCart, cart, removeFromCart }) => {
//   return (
//     <div>
//       {/* Top Navigation Section */}
//       <div className="bg-dark-navy text-white p-4 shadow-md fixed top-0 left-0 right-0 z-50">
//         <div className="flex justify-between items-center">
//           <div className="flex space-x-8">
//             {/* Home Button */}
//             <button
//               className="text-lg font-bold hover:text-green-500 transition-colors"
//               onClick={() => console.log("Home clicked")}
//             >
//               Home
//             </button>
//             {/* Cart Button */}
//             <button
//               className="text-lg font-bold hover:text-green-500 transition-colors"
//               onClick={() => console.log("Cart clicked")}
//             >
//               Cart ({cart.length})
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Main Pizza Cards Section */}
//       <div className="pt-16 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {pizzas.map((pizza) => (
//           <PizzaCard
//             key={pizza.id}
//             pizza={pizza}
//             addToCart={addToCart}
//             cart={cart}
//             removeFromCart={removeFromCart}
//           />
//         ))}
//       </div>

//       {/* Cart Section */}
//       <div className="fixed right-4 top-1/4 bg-white p-4 rounded-lg shadow-md z-50">
//         <h2 className="font-bold text-xl">🛒 Your Cart</h2>
//         <ul>
//           {cart.map((item) => (
//             <li
//               key={item.id}
//               className="flex justify-between items-center mb-3"
//             >
//               <span>{item.name}</span>
//               <button
//                 onClick={() => removeFromCart(item.id)}
//                 className="text-red-500 hover:text-red-700"
//               >
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//         <strong>
//           Total: $
//           {cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
//         </strong>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import { pizzas } from "../data";
import PizzaCard from "../components/PizzaCard";

const Home = ({ addToCart, cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4 flex">
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-4">🍕 Pizza House</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pizzas.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} addToCart={addToCart} />
          ))}
        </div>
      </div>

      {/* Cart summary on the right */}
      <div className="w-1/4 bg-gray-100 p-4 ml-4 rounded shadow-lg">
        <h2 className="text-lg font-semibold">Your Cart</h2>
        <div>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div>
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between py-2">
                  <span>{item.name}</span>
                  <span>
                    {item.quantity} x ${item.price}
                  </span>
                </div>
              ))}
              <h3 className="mt-2 font-semibold">Total: ${total.toFixed(2)}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
