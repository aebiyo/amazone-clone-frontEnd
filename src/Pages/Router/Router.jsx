import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../Landing/Landing";

import Payment from "../Payment/Payment";
import Orders from "../Orders/Order";
import Cart from "../Cart/Cart";
import Results from "../Results/Results.jsx";
import ProductDetail from "../ProductDetail/ProductDetail";
import Auth from "../Auth/SignUp";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
//const stripePromise = loadStripe(
//"pk_test_51QPk2wKwv9B5qX6CV0rmBjZfALGSa3arcNlMGjC5ZTU9RYW6hQ8NRMnF9cpl8Nzyl7nsvuqczr0o5znkx6AO5sNH00SVA1Nb8C"
//);

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/payment" element={<Payment />} />
        <Route
          path="/orders"
          element={
            // <ProtectedRoute
            //   msg={"you must login to access your orders"}
            //   redirect={"/orders"}
            // >
            //   <Elements stripe={stripePromise}>
            <Orders />
            //   </Elements>
            // </ProtectedRoute>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}
//
export default Routing;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Landing from "./Pages/Landing/Landing";
// import SignUp from "./Pages/Auth/SignUp";
// import Payment from "./Pages/Payment/Payment";
// import Orders from "./Pages/Orders/Orders";
// import Cart from "./Pages/Cart/Cart";
// import Results from "./Pages/Results/Results"
// import ProductDetail from "./Pages/ProductDetail/ProductDetail"
// function Routing() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/auth" element={<SignUp />} />
//         <Route path="/payment" element={<Payment />} />
//         <Route path="/orders" element={<Orders />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/category/:categoryName" element={<Results />} />
//         <Route path="/products/:productId" element={<ProductDetail />} />
//       </Routes>
//     </Router>
//   );
// }

// export default Routing;
