import React, { Component } from 'react';
import Modal from "react-modal";
import '../App.css'

class Portfolio extends Component {

  state = {
    isOpen: false,
    currentProject: null,
  };

  openModal = (project) => {
    this.setState({ isOpen: true, currentProject: project });
  };

  closeModal = () => {
    this.setState({ isOpen: false, currentProject: null });
  };

  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map((project) => {
        var projectImage = "images/portfolio/" + project.image;
        return (
          <div key={project.title} className="columns portfolio-item">
            <div className="item-wrap" onClick={() => this.openModal(project)}>
              <img alt={project.title} src={projectImage} />
              <div className="portfolio-details">
                <h5>{project.title}</h5>
                <p>{project.category}</p>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>

        {this.state.currentProject && (
          <Modal
            isOpen={this.state.isOpen}
            onRequestClose={this.closeModal}
            contentLabel="Project Details"
            className="modal"
            overlayClassName="overlay"
          >
            <div className="modal-content">
              <h2>{this.state.currentProject.title}</h2>
              <p>{this.state.currentProject.description}</p>
              <a
                href={this.state.currentProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                Visit Project
              </a>
              <button onClick={this.closeModal} className="close-modal">
                Close
              </button>
            </div>
          </Modal>
        )}
      </section>
    );
  }
}


export default Portfolio;
