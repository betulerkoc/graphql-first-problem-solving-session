import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex space-x-5 justify-center my-10 font-bold">
      <Link to="/">Characters</Link>
      <Link to="/episodes">Episode</Link>
    </div>
  );
};
export default Navbar;
