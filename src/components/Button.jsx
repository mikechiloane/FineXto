import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-gradient-to-br from-[#ff833b] via-[#ffb20b] to-[#fda73d] rounded-[10px] hover:shadow-woke transition-shadow duration-300 outline-none ${styles}`}>
    Get Started
  </button>
);

export default Button;
