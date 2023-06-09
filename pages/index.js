import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Featured from "./Components/Featured";
import Step from "./Components/Step";
import Projects from "./Components/Projects";
import Clients from "./Components/Clients";
import Concepts from "./Components/Concepts";
import Footer from "./Components/Footer";
const inter = Inter({ subsets: ["latin"] });
import ScrollToTop from "react-scroll-to-top";

export default function Home() {
  return (
    <>
      <ScrollToTop smoth color="#14213d" style={{ borderRadius: 0 }} />
      <Navbar />
      <Hero />
      <Featured />
      <Step />
      <Projects />
      <Clients />
      <Concepts />
      <Footer />
    </>
  );
}
