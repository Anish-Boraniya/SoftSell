import React, { useEffect, useState } from "react";
import favicon from "../assets/logo.png"
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { motion } from "motion/react";
import { useDispatch, useSelector } from "react-redux";
import { SetTheme } from "../redux/Theme/themeslice";

function Navbar() {
  const dark = useSelector(state => state.theme.dark)
  const dispatch = useDispatch();


  const setTheme = ()=>{
    dispatch(SetTheme())
  }

  return (
    <motion.div
    initial={{top: -100}}
    animate={{top: 0}}
    transition={{duration: 1.2}}
      className={`w-full h-[9vh]  shadow-xl fixed z-[1]  flex justify-between px-5 text-lg font-semibold gap-10 items-center ${dark === true ? "bg-zinc-900 text-white" : "bg-white text-black" }`}
    >
        <div className="flex items-center gap-2">
          <img className="w-10 h-10" src={favicon} alt="" />
          <h1 className="text-lg">
            SoftSell
          </h1>
        </div>

      <div className=" absolute right-5 ">
        <button
          onClick={() => setTheme()}
          className={`p-2 rounded-full  ${dark ? "bg-white text-black" : "bg-zinc-900 text-white"}`}
        >
          {dark === true ? <MdOutlineLightMode /> : <MdDarkMode />}
        </button>
      </div>
    </motion.div>
  );
}

export default Navbar;
