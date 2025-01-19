// import React, { useContext, useEffect } from "react";
// import NavBar from "../components/NavBar";
// import { ThemeContext } from "../store/ThemeContext";

// export default function Layout({ children }) {
//   const { darkMode } = useContext(ThemeContext);

//   useEffect(() => {
//     if (darkMode) {
//       document.body.classList.add("dark");
//       document.body.classList.remove("light");
//     } else {
//       document.body.classList.add("light");
//       document.body.classList.remove("dark");
//     }
//   }, [darkMode]);

//   return (
//     <>
//       <NavBar />
//       <main>{children}</main>
//     </>
//   );
// }
