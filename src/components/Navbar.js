// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="bg-red-500 p-4 text-white flex justify-between">
//       <h1 className="text-2xl font-bold">🍕 Pizza Delivery</h1>
//       <Link to="/cart" className="bg-white text-red-500 px-4 py-2 rounded">
//         🛒 View Cart
//       </Link>
//     </nav>
//   );
// };

// export default Navbar;
// src/components/Navbar.js
// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 p-4">
//       <ul className="flex space-x-6 text-white">
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/cart">Cart</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 p-4">
//       <ul className="flex space-x-6 text-white">
//         <li>
//           <Link to="/" className="hover:text-yellow-400">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/cart" className="hover:text-yellow-400">
//             Cart
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-6 text-white">
        <li>
          <Link to="/" className="hover:text-yellow-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/cart" className="hover:text-yellow-400">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
