// Import necessary dependencies and components.
"use client"; // This comment indicates that this code should run on the client side in Next.js.

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";

import { EXTRA_LINKS } from "@/constants";
import { CONTACT_RECAPTCHA_ACTION, validateContactForm } from "@/lib/contact";
import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";

const ContactForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form field changes.
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    // Extract the field name and value from the event.
    const { name, value } = e.target as HTMLInputElement;
    setForm({ ...form, [name]: value });
  };

  // Validate the form on submission.
  const validateForm = (): boolean => {
    const error = validateContactForm(form);
    if (error) {
      toast.error(error);
      return false;
    }

    return true;
  };

  // Handle form submission.
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (!executeRecaptcha) {
      toast.error("reCAPTCHA is not ready. Please try again.");
      return;
    }

    setLoading(true);

    try {
      const recaptchaToken = await executeRecaptcha(CONTACT_RECAPTCHA_ACTION);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          recaptchaToken,
        }),
      });

      const data = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        toast.error(data?.error ?? "Something went wrong!");
        return;
      }

      toast.success("Thank You. I will get back to you as soon as possible.");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="mt-10 flex flex-col dark:text-black"
      autoComplete="off"
      autoCapitalize="off"
      onSubmit={handleSubmit}
    >
      {/* Input fields for name, email, and message. */}
      <input
        type="text"
        name="name"
        id="name"
        value={form.name}
        onChange={handleChange}
        disabled={loading}
        placeholder="Your name"
        className="h-14 rounded-lg px-4 borderBlack disabled:opacity-75 disabled:cursor-not-allowed dark:bg-white/80 dark:focus:bg-white transition-all dark:outline-hidden"
        required
        maxLength={200}
        autoComplete="off"
        autoCapitalize="off"
      />

      <input
        type="email"
        name="email"
        id="email"
        value={form.email}
        onChange={handleChange}
        disabled={loading}
        placeholder="Your email"
        className="h-14 rounded-lg my-4 px-4 borderBlack disabled:opacity-75 disabled:cursor-not-allowed dark:bg-white/80 dark:focus:bg-white transition-all dark:outline-hidden"
        required
        maxLength={100}
        autoComplete="off"
        autoCapitalize="off"
      />

      <textarea
        className="h-52 rounded-lg mb-4 borderBlack disabled:opacity-75 disabled:cursor-not-allowed p-4 dark:bg-white/80 dark:focus:bg-white transition-all dark:outline-hidden"
        name="message"
        id="message"
        value={form.message}
        onChange={handleChange}
        disabled={loading}
        placeholder="Your message"
        cols={30}
        rows={10}
        required
        maxLength={500}
      />

      {/* Submit button with conditional rendering for loading state. */}
      <button
        type="submit"
        className="group flex self-center items-center justify-center gap-2 h-12 w-32 bg-gray-900 text-white rounded-full outline-hidden transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 disabled:scale-100 disabled:bg-gray-900/65 dark:bg-white/10 dark:disabled:bg-white/65"
        disabled={loading}
      >
        {loading ? (
          <span className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
        ) : (
          <>
            Submit{" "}
            <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
          </>
        )}
      </button>
      <p className="mt-3 text-xs text-gray-500 dark:text-white/40">
        This site is protected by reCAPTCHA.
      </p>
    </form>
  );
};

// Define the Contact component.
const Contact = () => {
  // Use the useSectionInView custom hook to track when the "Contact" section is in view.
  const { ref } = useSectionInView("Contact");
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  // Return the Contact section with animations and the contact form.
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

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at my{" "}
        <Link className="underline" href={`mailto:${EXTRA_LINKS.email}`}>
          e-mail
        </Link>{" "}
        or through this form.
      </p>

      {siteKey ? (
        <GoogleReCaptchaProvider
          reCaptchaKey={siteKey}
          scriptProps={{
            async: false,
            defer: false,
            appendTo: "head",
            nonce: undefined,
          }}
        >
          <ContactForm />
        </GoogleReCaptchaProvider>
      ) : (
        <p className="mt-6 text-gray-700 dark:text-white/80">
          Contact form is currently unavailable.
        </p>
      )}
    </motion.section>
  );
};

// Export the Contact component.
export default Contact;
