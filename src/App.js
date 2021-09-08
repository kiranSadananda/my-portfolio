/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";

const Heading = tw.h1`text-blue-500 text-2xl p-2`;
const Container = tw.div`max-w-4xl mx-auto p-5 mt-5`;
function App() {
  return (
    <main tw="w-full text-gray-400 bg-gray-900">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}
export default App;
