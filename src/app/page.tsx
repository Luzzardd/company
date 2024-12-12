import Content from "@/components/Content";
import Corosul from "@/components/Corosul";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import "./globals.css";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Corosul/>
    <Hero/>
    <Content/>
    </>
  );
}
