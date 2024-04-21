import Link from "next/link";
import { PrimaryButton } from "../../components/PrimaryButton";

// import heroimage from "@/public/images/heroimage.jpg"
export default function Hero() {
  const heroStyle = {
    backgroundImage: `url(https://i.postimg.cc/TwBpRbBX/hero.jpg)`,
  };
  return (
    <header className="hero min-h-[1080px] justify-center md:justify-start " style={heroStyle}>
    <div className="max-w-md ml-0  md:ml-20 lg:ml-36 p-2 sm:p-0">
      <h1 className="mb-5 text-5xl font-bold">We build dreams, not just walls</h1>
      <p className="mb-5 text-gray-600">Fulfill your international property developments with us</p>
      <Link href="/contactus">
            <PrimaryButton text="Let&lsquo;s Talk" background="teal" />
            </Link>
      </div>
    </header>
  );
}
