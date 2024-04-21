import { Contactus } from "./Contactus";

export const metadata = {
  title: 'Contact us - invoriem',
  description: 'Crafting Dreams, Building Futures',
};

export default function Page() {
  return (
    <main className="container h-auto sm:h-screen ">
      <Contactus/>
    </main>
  );
}
