import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Featured from "./Components/Featured";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
    </>
  );
}
