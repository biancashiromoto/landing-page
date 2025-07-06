import Navbar from "@/app/ui/navbar/navbar";
import Header from "@/app/ui/header/header";
import Intro from "./ui/intro/intro";
import Courses from "./ui/courses/courses";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <Intro />
      <Courses />
    </main>
  );
}
