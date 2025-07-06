import Navbar from "@/app/ui/navbar/navbar";
import Header from "@/app/ui/header/header";
import Intro from "./ui/intro/intro";
import Courses from "./ui/courses/courses";
import FAQ from "./ui/faq/faq";
import Water from "./ui/water/water";

export default function Home() {
  return (
    <main id="main-content">
      <Navbar />
      <Header />
      <Intro />
      <Water />
      <Courses />
      <FAQ />
    </main>
  );
}
