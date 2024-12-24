import ContactMe from "@/components/ContactMe";
import { FloatingNav } from "@/components/FloatingNav";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import ReacentProject from "@/components/ReacentProject";
import Resume from "@/components/Resume";
import Testemonial from "@/components/Testemonial";
import { navItems } from "@/data";



export default function Home() {
  return (
   <main className="relative h-full bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
    <div className="max-w-7xl w-full ">
      <h1 className="text-white-200">Hello, Portfolio</h1>
      <FloatingNav navItems={navItems} />
      <Hero/>
      <Grid/>
      <Testemonial/>
      <Resume/>
      <ReacentProject/>
      <ContactMe/>
    </div>
   </main>
  );
}