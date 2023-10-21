import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Header from "@/components/header";

import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sanidhya | Personal Portfolio",
  description: "Sanidhya is a full-stack developer with 4 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 text-gray-950 relative pt-28 sm:pt-36`}
      >
        <div className="bg-[#fbe2e3] dark:bg-[#946263] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]" />
        <div className="bg-[#dbd7fb] dark:bg-[#676394] absolute top-[-1rem] -z-10 left-[-35rem] h-[50rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <aside>
              <Toaster position="top-right" />
            </aside>

            <aside>
              <ThemeSwitch />
            </aside>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
