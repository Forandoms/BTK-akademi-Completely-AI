
import React from 'react';

const projects = [
    { id: 1, title: 'Proje 1', description: 'Bu bir e-ticaret sitesi projesidir.', imageUrl: 'https://via.placeholder.com/300', technologies: ['React', 'Node.js', 'MongoDB'], liveUrl: '#', sourceUrl: '#' },
    { id: 2, title: 'Proje 2', description: 'Bu bir blog platformu projesidir.', imageUrl: 'https://via.placeholder.com/300', technologies: ['Vue.js', 'Firebase'], liveUrl: '#', sourceUrl: '#' },
    { id: 3, title: 'Proje 3', description: 'Bu bir portföy sitesi projesidir.', imageUrl: 'https://via.placeholder.com/300', technologies: ['React', 'Bootstrap'], liveUrl: '#', sourceUrl: '#' },
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
                                <img src={project.imageUrl} className="card-img-top" alt={project.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text">{project.description}</p>
                                    <p className="card-text"><small className="text-muted">{project.technologies.join(', ')}</small></p>
                                    <a href={project.liveUrl} className="btn btn-primary me-2">Canlı Demo</a>
                                    <a href={project.sourceUrl} className="btn btn-secondary">Kaynak Kodu</a>
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
