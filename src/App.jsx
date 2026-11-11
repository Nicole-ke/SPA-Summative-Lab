import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import ProjectForm from './components/ProjectForm';
import "./styles/App.css";

const initialProjects = [
  {
    id: 1,
    title: "Mama Mboga Stall",
    description: "A React app for a fresh preoduce kiosk with a live basket total.",
    image: "/images/mama-mboga.jpg",

  },

  {
    id: 2,
    title:"Bagged By Kathue",
    description: "An online store for custom tote bags.",
    image: "/images/bag.webp",

  },

  {
    id:3,
    title:"Shopping App",
    description: "A grocery app with dark mode, filters, and a cart.",
    image: "/images/shopping-bags.webp",

  },
];


function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [search, setSearch] = useState("");



function addProject(newProject) {
  setProjects((prevProjects) =>[...prevProjects, { ...newProject, id:Date.now()}]);

}

const filteredProjects = projects.filter((project) =>
project.title.toLowerCase().includes(search.toLowerCase())
);


return (
  <div className="app">
    <Header />
    <main className = "container">
      <ProjectForm addProject={addProject} />

      <section className="project-panel">
        <SearchBar search={search} setSearch={setSearch} />
        <ProjectList projects = {filteredProjects} />
      </section>
    </main>
  </div>
);
}

export default App;
