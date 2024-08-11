"use client";

import Header from "@/components/Header";
import Main from "@/components/Main";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center flex-col">
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, type: "spring", mass: 2 }}
        className="bg-white rounded-lg text-black px-5 py-3 w-[90%] md:w-fit"
      >
        <Header />
        <Main />
      </motion.div>
    </div>
  );
};

export default Home;
