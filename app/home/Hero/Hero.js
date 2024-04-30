import Link from "next/link";
import { PrimaryButton } from "../../components/PrimaryButton";

export default function Hero() {
  const heroStyle = {
    backgroundImage: `url(https://i.postimg.cc/TwBpRbBX/hero.jpg)`,
  };
  return (
    <header className="hero min-h-[1080px] justify-center md:justify-start " style={heroStyle}>
    <div className="max-w-xl ml-4  md:ml-20 lg:ml-36 ">
      <h1 className="mb-5 text-5xl text-teal-700 font-bold">We build dreams, not just walls</h1>
      <p className="mb-5 text-xl text-black">Fulfill your international property developments with us</p>
      <Link href="/contactus">
            <PrimaryButton text="Let&lsquo;s Talk" background="teal" />
            </Link>
      </div>
    </header>
  );
}
