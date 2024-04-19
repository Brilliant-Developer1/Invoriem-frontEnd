import Link from "next/link";
import { PrimaryButton } from "../PrimaryButton";

// import heroimage from "@/public/images/heroimage.jpg"
export default function Hero() {
  const heroStyle = {
    backgroundImage: `url(https://images.unsplash.com/photo-1577541924560-2e647cce51d2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
  };
  return (
    <section className="hero min-h-[1080px] justify-center md:justify-start " style={heroStyle}>
    <div className="max-w-md ml-0  md:ml-20 lg:ml-36 p-2 sm:p-0">
      <h1 className="mb-5 text-5xl font-bold">We build dreams, not just walls</h1>
      <p className="mb-5 text-gray-600">Fulfill your international property developments with us</p>
      <Link href="/contactus">
            <PrimaryButton text="Let&lsquo;s Talk" background="teal" />
            </Link>
      </div>
    </section>
  );
}
