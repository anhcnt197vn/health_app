import { ReactNode } from "react";
import { Footer } from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ScrollToTopButton from "../../components/SrollToTopButton";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}
