// import React from "react";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Login from "./pages/Auth/Login";
// import SighUp from "./pages/Auth/SignUp";
// import Home from "./pages/Dashboard/Home";
// import Income from "./pages/Dashboard/Income";
// import Expense from "./pages/Dashboard/Expense";
// // import Expense from '/src/pages/Dashboard/Expense.jsx';





// const App = () =>{
//   return (
//     <div>
//       <Router>
//         <Routes>
//           <Route path="" element={<Root/>}/>
//           <Route path="/login" exact element={<Login />}/>
//           <Route path="/signUp" exact element={<SighUp />}/>
//           <Route path="/home" exact element={<Home />}/>
//           <Route path="/income" exact element={<Income />}/>
//           <Route path="/expense" exact element={<Expense />}/>
//         </Routes>
//       </Router>
//     </div>
//   );
// };

// export default App;

// const Root =()=>{

//   const isAuthenticated = !!localStorage.getItem("token");

//   return isAuthenticated ? (
//     <Navigate to="/home"/>
//   ): (
//   <Navigate to="login"/>

//   );
// };

import React from "react";

// Import Navigate along with other router components
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import bargraph from "../../assets/bargraph.jpg"; // ../../ takes you to src/, then into assets/

import Login from "./pages/Auth/Login";
// Corrected the typo from SighUp to SignUp
import SignUp from "./pages/Auth/SignUp"; // <-- FIX: Corrected import name
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expense from "./pages/Dashboard/Expense";
// Commented import below is unused - safe to remove if not needed
// import Expense from '/src/pages/Dashboard/Expense.jsx';

const App = () =>{
  return (
    <div>
      <Router>
        <Routes>
          {/* The Root component handles the redirect logic */}
          <Route path="/" element={<Root/>}/>
          {/* Removed 'exact' prop as it's default in v6/v7 */}
          <Route path="/login" element={<Login />}/>
          <Route path="/signUp" element={<SignUp />}/> {/* <-- FIX: Use corrected component name */}
          <Route path="/home" element={<Home />}/>
          <Route path="/income" element={<Income />}/>
          <Route path="/expense" element={<Expense />}/>
          {/* You might want a 404 route here as well */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App;

// Component to handle initial redirect based on authentication
const Root = () => {
  // Check if the token exists in localStorage
  const isAuthenticated = !!localStorage.getItem("token");

  // Conditionally navigate based on authentication status
  // FIX: Added the missing closing parenthesis after <Navigate to="login"/>
  return isAuthenticated ? (
    <Navigate to="/home"/>
  ) : (
    <Navigate to="/login"/> // <-- FIX: Corrected syntax
  );
};

// Example NotFound component (optional)
// const NotFound = () => <h1>404 - Page Not Found</h1>;