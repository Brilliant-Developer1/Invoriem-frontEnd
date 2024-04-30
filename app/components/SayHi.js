import { PrimaryButton } from "@/app/components/PrimaryButton";
import Link from "next/link";

const SayHi = () => {
  return (
    <section className='mt-10 p-5 flex justify-between flex-col md:flex-row'>
        <div>
            <h2 className="text-teal text-3xl md:text-5xl font-bold py-10 md:py-0">
                Say hi,
            </h2>
        </div>
        <div className="max-w-96 ">
        <p className="mb-10 text-black text-2xl leading-relaxed">We&#39;d love to learn more about your project.</p>
        <Link href="/contactus"  >
            <PrimaryButton width='w-full'  text="Let&lsquo;s Talk" background="teal" />
            </Link>
        </div>
        <div></div>
    </section>
  )
}

export default SayHi