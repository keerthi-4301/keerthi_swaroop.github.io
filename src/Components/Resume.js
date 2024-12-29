import React, { Component } from 'react';

class Resume extends Component {
  render() {
    if (!this.props.data) {
      return <div>Loading...</div>;
    }

    const { education, work, certifications,resumedownload } = this.props.data;

    // Mapping education data
    const educationList = education.map((edu) => (
      <div key={edu.school}>
        <h3>{edu.school}</h3>
        <p className="info">
          {edu.degree} <span>&bull;</span>
          <em className="date">{edu.graduated}</em>
        </p>
        <p>{edu.description}</p>
      </div>
    ));

    // Mapping work experience
    const workList = work.map((job) => (
      <div key={job.company}>
        <h3>{job.company}</h3>
        <p className="info">
          {job.title} <span>&bull;</span>
          <em className="date">{job.years}</em>
        </p>
        <p>{job.description}</p>
      </div>
    ));

    // Mapping certifications with logos
    const certificationsList = certifications.map((cert) => (
      <div className="row item" key={cert.title}>
        <div className="twelve columns">
          <div className="certification-item">
            <img
              src={cert.logo}
              alt={`${cert.title} Logo`}
              className="certification-logo"
            />
            <div className="certification-details">
              <h3>{cert.title}</h3>
              <p className="info">
                {cert.organization} <span>&bull;</span>
                <em className="date">{cert.date}</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    ));

    return (
      <section id="resume">
        {/* Work Experience Section */}
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work Experience</span>
            </h1>
          </div>
          <div className="nine columns main-col">{workList}</div>
        </div>

        {/* Certifications Section */}
        <div className="row certifications">
  <div className="three columns header-col">
    <h1>
      <span>Certifications</span>
    </h1>
  </div>

  <div className="nine columns main-col">
    {this.props.data.certifications.map((certification) => (
      <div className="row item" key={certification.title}>
        <div className="twelve columns">
          <div className="certification-item">
            {/* Ensure path includes "images/" */}
            <img
              src={`images/${certification.logo}`}
              alt={`${certification.title} Logo`}
              className="certification-logo"
            />
            <div className="certification-details">
              <h3>{certification.title}</h3>
              <p className="info">
                {certification.organization} <span>&bull;</span>
                <em className="date">{certification.date}</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


        {/* Education Section */}
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>
          <div className="nine columns main-col">{educationList}</div>
        </div>

        <div className="row download-resume">
  <div className="twelve columns">
    <a
      href="https://drive.google.com/file/d/1z_CiURDNuhYIiFDD6SR5Sn-awtEG-uff/view?usp=drive_link" // Dynamically loads the URL
      className="button"
      target="_blank" // Opens the resume in a new tab
      rel="noopener noreferrer" // Ensures secure link navigation
    >
      Download Resume
    </a>
  </div>
</div>
  </section>
    );
  }
}

export default Resume;
