import Navbar from "@/app/ui/navbar/navbar";
import Header from "@/app/ui/header/header";
import Intro from "./ui/intro/intro";
import Courses from "./ui/courses/courses";
import FAQ from "./ui/faq/faq";

export default function Home() {
  return (
    <main id="main-content">
      <Navbar />
      <Header />
      <Intro />
      <Courses />
      <FAQ />
    </main>
  );
}
