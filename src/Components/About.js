import React, { Component } from 'react';

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
        <div className="profile-pic-wrapper">
          <img className="profile-pic" src={profilepic} alt="Keerthi Swaroop's Profile Pic" />
        </div>
        <div className="main-col">
          <h2>About Me</h2>
          <p>
            Experienced Data Engineer with 3+ years of expertise in building scalable data pipelines and data warehousing.
            Proficient in AWS, Azure, Python, SQL, and Apache technologies, with a strong track record of improving data
            integration processes and enhancing analytics performance. Skilled in creating real-time dashboards, optimizing
            ETL workflows, and ensuring data quality and compliance. Adept at collaborating with cross-functional teams to
            deliver actionable insights, streamline operations, and support data-driven decision-making.
          </p>
          <div className="skills">
            <h2>Skills</h2>
            <ul>
              <li><strong>Methodologies:</strong> SDLC, Agile, Waterfall</li>
              <li><strong>Programming Languages:</strong> Python, SQL, R</li>
              <li><strong>Packages:</strong> NumPy, Pandas, SciPy, Scikit-learn, TensorFlow, PySpark</li>
              <li><strong>Visualization Tools:</strong> Tableau, Power BI, Advanced Excel (Pivot Tables, VLOOKUP), Matplotlib, Plotly, Seaborn</li>
              <li><strong>IDEs:</strong> Visual Studio Code, PyCharm, Jupyter Notebook</li>
              <li><strong>Cloud Platforms:</strong> AWS (EC2, S3, Redshift, Lambda, Glue, Athena), Azure Databricks, Snowflake</li>
              <li><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB, DynamoDB, Oracle, Google Big
              Query </li>
              <li><strong>Big Technology / Engineering Concepts:</strong> Apache Airflow, Apache Kafka, Apache Hadoop, Apache Spark, ETL/ELT, HDFS, Hive, Docker, Kubernetes</li>
              <li><strong>Other Technical Skills:</strong> Data Warehousing, Data Mining, Machine Learning Algorithms, Git, Data Quality and Governance, Big Data, Advance Analytics, Statistical Methods</li>
              <li><strong>Operating Systems:</strong> Windows, Linux, Mac OS</li>
            </ul>
          </div>
        </div>
      </section>
    );    
  }
} 
    
export default About;
