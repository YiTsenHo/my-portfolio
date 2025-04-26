import { useState, useEffect } from 'react';
import { projectsData } from '../data/projects';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';

const Projects = () => {
  const [activeSection, setActiveSection] = useState('');

  const categories = [
    { id: "ui-design", name: "UI 設計" },
    { id: "graphic-design", name: "平面設計" },
    { id: "digital-art", name: "電繪作品" },
    { id: "others", name: "其他" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('.project-section').forEach(
      section => observer.observe(section)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <div className="projects-wrapper">
      <aside className="projects-sidebar">
        {categories.map(category => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className={`category-link ${category.id === activeSection ? 'active' : ''}`}
          >
            {category.name}
          </a>
        ))}
      </aside>

      <main className="projects-content">
        {categories.map(category => (
          <section 
            key={category.id} 
            id={category.id} 
            className="project-section"
          >
            <h2 className="section-title">
              {category.name}
              {category.id === "ui-design" && 
                <span className="section-note">點擊可放大</span>
              }
            </h2>
            <div className="projects-grid">
              {projectsData
                .filter(project => project.category === category.name)
                .map(project => (
                  <ProjectCard key={project.id} {...project} />
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Projects;
