import { useState } from "react";

function ProjectForm({ addProject }) {
  // Form fields only matter to this component, so their state lives here
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // stop the page refresh

    if (!title.trim() || !description.trim()) {
      setError("Please add a title and a description.");
      return; // stop here, don't add anything
    }

    addProject({ title, description });

    // Clear the form after adding
    setTitle("");
    setDescription("");
    setError("");
  }

  return (
    <form className="card project-form" onSubmit={handleSubmit}>
      <h2>Add Project</h2>

      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {error && <p className="error">{error}</p>}

      <button type="submit">Add</button>
    </form>
  );
}

export default ProjectForm;