"use client";

import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 text-center w-[min(100%,38rem)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>My contact</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at my{" "}
        <Link className="underline" href="mailto:sanidhya.verma12345@gmail.com">
          e-mail
        </Link>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col">
        <input
          type="email"
          placeholder="Your email"
          className="h-14 rounded-lg px-4 borderBlack"
        />
        <textarea
          className="h-52 my-4 rounded-lg borderBlack p-4"
          placeholder="Your message"
          cols={30}
          rows={10}
        />
        <button
          type="submit"
          className="group flex max-sm:self-center items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
