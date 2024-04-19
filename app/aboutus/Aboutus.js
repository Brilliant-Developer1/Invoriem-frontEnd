import Link from "next/link";
import { PrimaryButton } from "../components/PrimaryButton";

export const Aboutus = () => {
  return (
    <section className="mt-8 md:mt-20 flex flex-col md:flex-row  justify-around px-5">
      <h1 className="text-4xl md:text-5xl  lg:text-6xl font-extrabold grow">About us</h1>
      <div className="max-w-[30rem] lg:max-w-[34rem] mt-4 md:mt-0 text-gray-500 leading-loose">
        <p>
          Augue eget nisi, turpis vel nibh urna, ut quam odio libero, aliquam,
          morbi proin feugiat nisl mattis enim venenatis nunc, malesuada urna,
          viverra massa lacus pellentesque lacus, tortor eleifend egestas vitae
          dignissim odio arcu nunc scelerisque nisl nunc gravida id egestas eros
          ullamcorper turpis orci id mattis ipsum sit adipiscing.
          <span className="block mt-5">
            Massa vitae aliquam condimentum diam aliquam suspendisse diam in in
            egestas congue eget fringilla neque suspendisse diam, ultrices
            interdum tristique.
          </span>
        </p>
        <p className="mt-14 mb-10 text-teal text-2xl">We&#39;d love to learn more about your project.</p>
        <Link href="/contactus" >
            <PrimaryButton text="Let&lsquo;s Talk" background="teal" />
            </Link>
      </div>
    </section>
  );
};
