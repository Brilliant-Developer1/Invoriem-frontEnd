import { PrimaryButton } from "@/app/components/PrimaryButton";
import Link from "next/link";


export const Aboutus = () => {
  return (
    <section className="mt-8 md:mt-20 flex flex-col md:flex-row  justify-around px-5">
      <h1 className="text-4xl md:text-5xl text-teal lg:text-6xl font-extrabold grow">About us</h1>
      <div className="max-w-[30rem] lg:max-w-[34rem] mt-4 md:mt-0 text-grey leading-loose">
        <p>
        We remain true to the same principles on which our company was founded over ten years ago: providing superior service to our clients, putting safety first, creating opportunities for our people, delivering exceptional work, fostering innovation, acting with integrity, and strengthening our communities. These tenets unite us as one company, and guide every aspect of our business.
          <span className="block mt-5">
            Massa vitae aliquam condimentum diam aliquam suspendisse diam in in
            egestas congue eget fringilla neque suspendisse diam, ultrices
            interdum tristique.
          </span>
        </p>
        <p className="mt-14 mb-10 text-teal text-2xl">We&#39;d love to learn more about your project.</p>
        <Link href="/contactus" >
            <PrimaryButton width='w-full' text="Let&lsquo;s Talk" background="teal" />
            </Link>
      </div>
    </section>
  );
};
