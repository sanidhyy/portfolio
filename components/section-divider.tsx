// Import the necessary dependencies.
"use client"; // This comment indicates that this code should run on the client side in Next.js.

import { motion } from "framer-motion";

// Define the SectionDivider component to display a vertical divider between sections.
const SectionDivider = () => {
  return (
    <motion.div
      className="bg-gray-300 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      aria-hidden
    />
  );
};

export default SectionDivider;
