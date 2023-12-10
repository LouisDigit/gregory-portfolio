import About from "@/components/about";
import Header from "@/components/header";
import ProjectTable from "@/components/project-table";

const Home = () => {
  return (
    <main className="w-full">
      <Header />
      <ProjectTable />
      <About />
    </main>
  );
};

export default Home;
