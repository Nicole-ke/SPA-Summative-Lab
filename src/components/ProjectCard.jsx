function ProjectCard({ project }) {
  return (
    <article className="project-card">
      {project.image ? (
        <img className="thumbnail" src={project.image} alt={project.title} />
      ) : (
        <div className="thumbnail placeholder" aria-label="No image">x</div>
      )}

      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </article>
  );
}

export default ProjectCard;