import React from "react";
import bargraph from "../../assets/images/graph.jpg"; // Make sure this path is correct relative to this file
import { LuTrendingUpDown } from "react-icons/lu"; // 

// ... rest of AuthLayout.jsx code ...

// (Remember to also ensure 'export default AuthLayout;' is at the bottom if you haven't added it yet

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* Left Side - Content Area */}
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 p-12"> {/* p-12 overrides pt-8, consider adjusting if needed */}
        <h2 className="text-lg font-medium text-black"> Expense Tracker</h2>
        {children} {/* Renders the content passed to AuthLayout (e.g., Login form) */}
      </div>

      {/* Right Side - Decorative Area */}
      <div className="hidden md:block w-[40vw] h-screen bg-violet-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative">
        {/* Decorative Shapes */}
        {/* ERROR 1 FIX: Added closing </div> tag */}
        <div className="w-48 h-48 rounded-[40px] bg-purple-600 absolute -top-7 -left-5 "></div>

        {/* ERROR 2 & 3 FIX: Added closing </div> tag and corrected border syntax */}
        <div className="w-48 h-56 rounded-[40px] border-[20px] border-fuchsia-600 absolute top-[30%] -right-10"></div> {/* Corrected border-[20px] */}

        {/* ERROR 4 FIX: Added closing </div> tag */}
        <div className="w-48 h-56 rounded-[40px] bg-violet-500 absolute -bottom-7 -left-5"></div>

        {/* Stats Card - Placed within the right side, potentially overlaying shapes */}
        {/* This div should likely be a direct child of the main right-side div */}
        <div className="grid grid-cols-1 z-20 relative"> {/* Added relative positioning to ensure z-index works as expected against absolute elements */}
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Track Your Income and Expenses"
            value="430,000" // This is a static value, likely needs dynamic data later
            color="bg-primary" // Ensure 'bg-primary' is defined in your tailwind config or use a standard color like 'bg-purple-600'
          />
        </div>

        {/* Bar Graph Image */}
        {/* ERROR 5 FIX: Corrected src attribute syntax */}
        {/* <img
          src={bargraph} // Use the imported variable, not a string "{bargraph}"
          alt="Bar Graph" // Changed alt text slightly
          className="w-64 lg:w-[90%] absolute bottom-10 shadow-lg shadow-blue-400/15 z-10" // Added z-10 to be potentially behind the card but above shapes if needed
        /> */}
        <img
   // src={bargraph} // Remove this
   src="../../assets/images/graph.jpg" // Use absolute path from public dir
   alt="Graph"
   className="w-64 lg:w-[90%] absolute bottom-10 shadow-lg shadow-blue-400/15 z-10"
 />
      </div>
    </div>
  );
};

// export default AuthLayout;

const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-purple-400/10 border border-grey-200/50 z-10"> {/* z-10 if needed */}
      {/* ERROR 6 & 7 FIX: Corrected items-center and text-white */}
      <div
        className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`} // Corrected 'items-center' and 'text-white'
      >
        {icon}
      </div>
      <div>
        <h6 className="text-xs text-gray-500 mb-1">{label}</h6>
        <span className="text-[20px]">${value}</span> {/* Assumes value is just the number */}
      </div>
    </div>
  );
};

export default AuthLayout;