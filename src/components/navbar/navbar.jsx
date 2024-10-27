// export default function Navbar() {
//   return (
//     <div>
//       <nav className="flex items-center justify-between px-12 py-7 shadow-xl ">
//         <div className="logo cursor-pointer text-4xl font-bold ">
//           logo
//         </div>
//         <ul className=" cursor-pointer flex gap-5 items-center">
//           <li className="hover:bg-gray-300 p-4 rounded-xl  hidden md:block ">home</li>
//           <li className="hover:bg-gray-300 p-4 rounded-xl  hidden md:block">about</li>
//           <li className="hover:bg-gray-300 p-4 rounded-xl  hidden md:block">contact</li>
//           <li className="hover:bg-gray-300 p-4 rounded-xl  hidden md:block">projects</li>
//           <li><i className="fa-solid fa-bars text-2xl md:hidden"></i></li>
//         </ul>
//       </nav>



//     <nav className="flex  justify-center items-center shadow-xl h-[70vh] w-full md:hidden">
//     <ul className=" cursor-pointer flex gap-5 flex-col items-center">
//     <li><i className="fa-solid fa-xmark absolute right-7 text-3xl"></i></li>
//           <li className="hover:bg-gray-300 p-4 rounded-xl   ">home</li>
//           <li className="hover:bg-gray-300 p-4 rounded-xl ">about</li>
//           <li className="hover:bg-gray-300 p-4 rounded-xl  ">contact</li>
//           <li className="hover:bg-gray-300 p-4 rounded-xl ">projects</li>

//         </ul>
//     </nav>


//     </div>
//   )
// }




// import { useState } from 'react';

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Toggle the menu
//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <div>
//       {/* Main Navbar */}
//       <nav className="flex items-center justify-between px-12 py-7 shadow-xl">
//         <div className="logo cursor-pointer text-4xl font-bold">logo</div>
//         <ul className="cursor-pointer flex gap-5 items-center">
//           {/* Desktop Menu */}
//           <li className="hover:bg-gray-300 p-4 rounded-xl hidden md:block">home</li>
//           <li className="hover:bg-gray-300 p-4 rounded-xl hidden md:block">about</li>
//           <li className="hover:bg-gray-300 p-4 rounded-xl hidden md:block">contact</li>
//           <li className="hover:bg-gray-300 p-4 rounded-xl hidden md:block">projects</li>
//           {/* Mobile Menu Icon */}
//           <li onClick={toggleMenu} className="md:hidden">
//             <i className="fa-solid fa-bars text-2xl"></i>
//           </li>
//         </ul>
//       </nav>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <nav className="flex justify-center items-center shadow-xl h-[70vh] w-full md:hidden">
//           <ul className="cursor-pointer flex gap-5 flex-col items-center">
//             <li onClick={toggleMenu}>
//               <i className="fa-solid fa-xmark text-3xl absolute right-7"></i>
//             </li>
//             <li className="hover:bg-gray-300 p-4 rounded-xl">home</li>
//             <li className="hover:bg-gray-300 p-4 rounded-xl">about</li>
//             <li className="hover:bg-gray-300 p-4 rounded-xl">contact</li>
//             <li className="hover:bg-gray-300 p-4 rounded-xl">projects</li>
//           </ul>
//         </nav>
//       )}
//     </div>
//   );
// }



import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-12 py-7 shadow-xl">
        <div className="logo cursor-pointer text-4xl font-bold">logo</div>
        <ul className="cursor-pointer flex gap-5 items-center">
          {/* Desktop Menu */}
          <li className="hover:bg-gray-300 p-4 rounded-xl hidden md:block">home</li>
          <li className="hover:bg-gray-300 p-4 rounded-xl hidden md:block">about</li>
          <li className="hover:bg-gray-300 p-4 rounded-xl hidden md:block">contact</li>
          <li className="hover:bg-gray-300 p-4 rounded-xl hidden md:block">projects</li>
          {/* Mobile Menu Icon */}
          <li onClick={toggleMenu} className="md:hidden">
            <i className="fa-solid fa-bars text-2xl"></i>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        } md:hidden flex justify-center items-center`}
      >
        <ul className="cursor-pointer flex gap-5 flex-col items-center">
          <li onClick={toggleMenu}>
            <i className="fa-solid fa-xmark text-3xl absolute right-7"></i>
          </li>
          <li className="hover:bg-gray-300 p-4 rounded-xl">home</li>
          <li className="hover:bg-gray-300 p-4 rounded-xl">about</li>
          <li className="hover:bg-gray-300 p-4 rounded-xl">contact</li>
          <li className="hover:bg-gray-300 p-4 rounded-xl">projects</li>
        </ul>
      </div>
    </div>
  );
}
