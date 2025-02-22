// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import CartPage from "./pages/CartPage";

// function App() {
//   const [cart, setCart] = useState([]);

//   const addToCart = (pizza) => {
//     setCart((prevCart) => [...prevCart, pizza]);
//   };

//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home addToCart={addToCart} />} />
//         <Route path="/cart" element={<CartPage cart={cart} />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import CartPage from "./pages/CartPage";

// function App() {
//   const [cart, setCart] = useState([]);

//   const addToCart = (pizza) => {
//     setCart((prevCart) => {
//       const existingPizza = prevCart.find((item) => item.id === pizza.id);
//       if (existingPizza) {
//         // If pizza already in cart, increase its quantity
//         return prevCart.map((item) =>
//           item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       } else {
//         // If pizza not in cart, add it with quantity 1
//         return [...prevCart, { ...pizza, quantity: 1 }];
//       }
//     });
//   };

//   const removeFromCart = (pizzaId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== pizzaId));
//   };

//   const updateQuantity = (pizzaId, newQuantity) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === pizzaId ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   return (
//     <Router>
//       <Navbar />
//       <div className="flex">
//         <Routes>
//           <Route
//             path="/"
//             element={<Home addToCart={addToCart} cart={cart} />}
//           />
//           <Route path="/cart" element={<CartPage cart={cart} />} />
//         </Routes>
//         <div className="fixed top-4 right-4 p-4 bg-green-500 text-white rounded-lg shadow-lg">
//           <span>{cart.length} items in cart</span>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import CartPage from "./pages/CartPage";

// function App() {
//   const [cart, setCart] = useState([]);

//   const addToCart = (pizza) => {
//     setCart((prevCart) => {
//       const existingPizza = prevCart.find((item) => item.id === pizza.id);
//       if (existingPizza) {
//         // If pizza already in cart, increase its quantity
//         return prevCart.map((item) =>
//           item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       } else {
//         // If pizza not in cart, add it with quantity 1
//         return [...prevCart, { ...pizza, quantity: 1 }];
//       }
//     });
//   };

//   const removeFromCart = (pizzaId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== pizzaId));
//   };

//   const updateQuantity = (pizzaId, newQuantity) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === pizzaId ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   return (
//     <Router>
//       <Navbar />
//       <div className="flex">
//         <Routes>
//           <Route
//             path="/"
//             element={<Home addToCart={addToCart} cart={cart} />}
//           />
//           <Route
//             path="/cart"
//             element={
//               <CartPage
//                 cart={cart}
//                 removeFromCart={removeFromCart}
//                 updateQuantity={updateQuantity}
//               />
//             }
//           />
//         </Routes>
//         <div className="fixed top-4 right-4 p-4 bg-green-500 text-white rounded-lg shadow-lg">
//           <span>{cart.length} items in cart</span>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import CartPage from "./pages/CartPage";

// function App() {
//   const [cart, setCart] = useState([]);

//   const addToCart = (pizza) => {
//     setCart((prevCart) => {
//       const existingPizza = prevCart.find((item) => item.id === pizza.id);
//       if (existingPizza) {
//         // If pizza already in cart, increase its quantity
//         return prevCart.map((item) =>
//           item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       } else {
//         // If pizza not in cart, add it with quantity 1
//         return [...prevCart, { ...pizza, quantity: 1 }];
//       }
//     });
//   };

//   const removeFromCart = (pizzaId) => {
//     setCart((prevCart) => {
//       return prevCart.filter((item) => item.id !== pizzaId);
//     });
//   };

//   const updateQuantity = (pizzaId, newQuantity) => {
//     setCart((prevCart) => {
//       return prevCart.map((item) =>
//         item.id === pizzaId ? { ...item, quantity: newQuantity } : item
//       );
//     });
//   };

//   return (
//     <Router>
//       <Navbar />
//       <div className="flex">
//         <Routes>
//           <Route
//             path="/"
//             element={<Home addToCart={addToCart} cart={cart} />}
//           />
//           <Route
//             path="/cart"
//             element={
//               <CartPage
//                 cart={cart}
//                 removeFromCart={removeFromCart}
//                 updateQuantity={updateQuantity}
//               />
//             }
//           />
//         </Routes>
//         {/* Cart Counter */}
//         <div className="fixed top-4 right-4 p-4 bg-green-500 text-white rounded-lg shadow-lg">
//           <span>{cart.length} items in cart</span>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import CartPage from "./pages/CartPage";

// function App() {
//   const [cart, setCart] = useState([]);

//   // Add item to the cart
//   const addToCart = (pizza) => {
//     const existingPizza = cart.find((item) => item.id === pizza.id);
//     if (existingPizza) {
//       // If the pizza already exists, update quantity
//       setCart(
//         cart.map((item) =>
//           item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
//         )
//       );
//     } else {
//       // Add new pizza to cart
//       setCart([...cart, { ...pizza, quantity: 1 }]);
//     }
//   };

//   // Remove item from the cart
//   const removeFromCart = (pizzaId) => {
//     setCart(cart.filter((item) => item.id !== pizzaId));
//   };

//   // Update quantity of pizza
//   const updateQuantity = (pizzaId, newQuantity) => {
//     if (newQuantity === 0) {
//       removeFromCart(pizzaId);
//     } else {
//       setCart(
//         cart.map((item) =>
//           item.id === pizzaId ? { ...item, quantity: newQuantity } : item
//         )
//       );
//     }
//   };

//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home addToCart={addToCart} cart={cart} />} />
//         <Route
//           path="/cart"
//           element={
//             <CartPage
//               cart={cart}
//               removeFromCart={removeFromCart}
//               updateQuantity={updateQuantity}
//             />
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar"; // Adjust path if necessary
// import Home from "./pages/Home"; // Adjust path if necessary
// import CartPage from "./pages/CartPage"; // Adjust path if necessary

// function App() {
//   const [cart, setCart] = useState([]);

//   const addToCart = (pizza) => {
//     // Add pizza to the cart if not already there
//     const pizzaInCart = cart.find((item) => item.id === pizza.id);
//     if (!pizzaInCart) {
//       setCart([...cart, pizza]);
//     }
//   };

//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home addToCart={addToCart} cart={cart} />} />
//         <Route path="/cart" element={<CartPage cart={cart} />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar"; // Adjust path if necessary
// import Home from "./pages/Home"; // Adjust path if necessary
// import CartPage from "./pages/CartPage"; // Adjust path if necessary

// function App() {
//   const [cart, setCart] = useState([]);

//   // Add to cart
//   const addToCart = (pizza) => {
//     const pizzaInCart = cart.find((item) => item.id === pizza.id);
//     if (!pizzaInCart) {
//       setCart([...cart, { ...pizza, quantity: 1 }]);
//     } else {
//       setCart(
//         cart.map((item) =>
//           item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
//         )
//       );
//     }
//   };

//   // Remove from cart
//   const removeFromCart = (pizzaId) => {
//     setCart(cart.filter((item) => item.id !== pizzaId));
//   };

//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <Home
//               addToCart={addToCart}
//               removeFromCart={removeFromCart}
//               cart={cart}
//             />
//           }
//         />
//         <Route path="/cart" element={<CartPage cart={cart} />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// import React, { useState } from "react";
// import Home from "./pages/Home";
// import { pizzas } from "./data"; // Assuming you have a pizza data source

// const App = () => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (pizza) => {
//     setCart((prevCart) => {
//       const pizzaInCart = prevCart.find((item) => item.id === pizza.id);
//       if (pizzaInCart) {
//         return prevCart.map((item) =>
//           item.id === pizza.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       return [...prevCart, { ...pizza, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (pizzaId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== pizzaId));
//   };

//   const updateQuantity = (pizzaId, quantity) => {
//     setCart((prevCart) => {
//       return prevCart.map((item) =>
//         item.id === pizzaId ? { ...item, quantity: Math.max(1, quantity) } : item
//       );
//     });
//   };

//   return (
//     <div className="App">
//       <Home
//         addToCart={addToCart}
//         cart={cart}
//         removeFromCart={removeFromCart}
//         updateQuantity={updateQuantity}
//       />
//     </div>
//   );
// };

// export default App;
// import React, { useState } from "react";
// import Home from "./pages/Home";
// import { pizzas } from "./data"; // Adjust if needed

// const App = () => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (pizza) => {
//     setCart((prevCart) => [...prevCart, pizza]);
//   };

//   const removeFromCart = (pizzaId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== pizzaId));
//   };

//   return (
//     <div className="App">
//       <Home addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} />
//     </div>
//   );
// };

// export default App;
// import React, { useState } from "react";
// import Home from "./pages/Home";
// import { pizzas } from "./data"; // Adjust if needed

// const App = () => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (pizza) => {
//     setCart((prevCart) => [...prevCart, pizza]);
//   };

//   const removeFromCart = (pizzaId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== pizzaId));
//   };

//   return (
//     <div className="App">
//       <Home addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} />
//     </div>
//   );
// };

// export default App;
// import React, { useState } from "react";
// import Home from "./pages/Home";
// import { pizzas } from "./data"; // Adjust the pizza data location

// const App = () => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (pizza) => {
//     setCart((prevCart) => [...prevCart, pizza]);
//   };

//   const removeFromCart = (pizzaId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== pizzaId));
//   };

//   return (
//     <div className="App">
//       <Home addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} />
//     </div>
//   );
// };

// export default App;
// import React, { useState } from "react";
// import Home from "./pages/Home"; // Adjust if necessary
// import { pizzas } from "./data"; // Adjust the pizza data location

// const App = () => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (pizza) => {
//     setCart((prevCart) => [...prevCart, pizza]);
//   };

//   const removeFromCart = (pizzaId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== pizzaId));
//   };

//   return (
//     <div className="App">
//       <Home addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} />
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";

function App() {
  const [cart, setCart] = useState([]);

  // Add item to the cart
  const addToCart = (pizza) => {
    const existingPizza = cart.find((item) => item.id === pizza.id);
    if (existingPizza) {
      // If the pizza already exists, update quantity
      setCart(
        cart.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // Add new pizza to cart
      setCart([...cart, { ...pizza, quantity: 1 }]);
    }
  };

  // Remove item from the cart
  const removeFromCart = (pizzaId) => {
    setCart(cart.filter((item) => item.id !== pizzaId));
  };

  // Update quantity of pizza
  const updateQuantity = (pizzaId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(pizzaId);
    } else {
      setCart(
        cart.map((item) =>
          item.id === pizzaId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} cart={cart} />} />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

