
import React from 'react';

const projects = [
    { id: 1, title: 'Proje 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Proje 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 3, title: 'Proje 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];

const Projects = () => {
    return (
        <section id="projects" className="section bg-light">
            <div className="container">
                <h2 className="text-center mb-4">Projeler</h2>
                <div className="row">
                    {projects.map(project => (
                        <div key={project.id} className="col-md-4 mb-4">
                            <div className="card h-100 shadow-sm project-card">
                                <div className="card-body">
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text">{project.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
