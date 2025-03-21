import React from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import codeImage from "../../assets/coder.svg";

const ResumeInfo = () => {
  return (
    <div className="resume">
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginTop: "3rem" }}>
        <span style={{ color: "#32CD30" }}>My</span> Resume
      </h1>
      
      {/* Professional Summary */}
      <div className="section">
        <h2>Professional Summary</h2>
        <p>
          Motivated Data Analyst with expertise in Python, SQL, and cloud technologies (AWS, Azure). Proven ability to develop data models, forecast financial outcomes, and implement real-time interactive dashboards. Strong background in data visualization, machine learning, and database management. Seeking to leverage analytical skills to drive strategic decision-making in a dynamic, growth-oriented environment.
        </p>
      </div>

      {/* Education */}
      <div className="section">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>Master of Science in Computer Science</strong><br />
            University of Central Missouri — August 2023 – May 2025 | GPA: 3.5/4.0
          </li>
          <li>
            <strong>Bachelor of Engineering in Electronic Communication</strong><br />
            Chaitanya Bharathi Institute of Technology, India — August 2017 - May 2021 | GPA: 3.56/4.0
          </li>
        </ul>
      </div>

      {/* Technical Skills */}
      <div className="section">
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Languages:</strong> C, Java, JavaScript, Python, MATLAB, SQL</li>
          <li><strong>Skills:</strong> Microsoft Excel, NumPy, pandas, Power BI, Matplotlib</li>
          <li><strong>Tools/Technologies:</strong> Anaconda for Python/R, Eclipse for Java, Visual Studio Code, Git, Docker, Kubernetes, CI/CD, Hadoop</li>
          <li><strong>Cloud:</strong> AWS (RDS, ECR, EKS, EFS, S3 Storage, EC2), Docker, Kubernetes, GCP, Azure DevOps</li>
          <li><strong>Databases:</strong> MongoDB, PostgreSQL, MySQL, Amazon RDS</li>
        </ul>
      </div>

      {/* Work Experience */}
      <div className="section">
        <h2>Work Experience</h2>
        <ul>
          <li>
            <strong>Data Analyst</strong> — Byju’s, India<br />
            <em>September 2021 – January 2023</em>
            <ul>
              <li>Designed and developed an interactive sales performance dashboard that improved analysis efficiency by 20%, integrating multiple data sources using Power BI.</li>
              <li>Cleaned, processed, and analyzed large datasets using Python (Pandas, NumPy), optimizing data-driven decisions.</li>
              <li>Developed financial forecasting models in Python, contributing to a 15% improvement in strategic decision-making.</li>
              <li>Conducted inventory optimization using Excel and VBA, leading to a 10% reduction in stockholding costs.</li>
              <li>Awarded Best Employee of the Quarter for outstanding performance.</li>
            </ul>
          </li>
          <li>
            <strong>Data Analyst Intern</strong> — Byju’s, India<br />
            <em>July 2021 – September 2021</em>
            <ul>
              <li>Developed a dynamic sales dashboard in Python, improving marketing strategy by presenting real-time insights to senior management.</li>
              <li>Utilized SQL to extract and aggregate financial data, streamlining reporting processes by 25%.</li>
              <li>Delivered key recommendations to marketing based on in-depth data visualizations.</li>
            </ul>
          </li>
          <li>
            <strong>Research Associate</strong> — Cognibot<br />
            <em>February 2019 – July 2019</em>
            <ul>
              <li>Led a team of 4 in developing IIoT solutions for predictive maintenance using Python and NI LabVIEW.</li>
              <li>Demonstrated practical application of AI/ML algorithms in industrial automation projects.</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Projects */}
      <div className="section">
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Machine Learning for Rock Classification</strong>
            <p>Developed a machine learning model to predict rock strength properties for petroleum engineering, improving exploration and reservoir characterization accuracy by 18%.</p>
          </li>
          <li>
            <strong>Banking System Simulation in Java</strong>
            <p>Simulated banking operations, utilizing OOP principles, exception handling, and file management.</p>
          </li>
        </ul>
      </div>

      {/* Certifications & Achievements */}
      <div className="section">
        <h2>Certifications & Achievements</h2>
        <ul>
          <li>AWS Certified Cloud Practitioner</li>
          <li>Best Employee of the Quarter (Byju’s, Q2 2022)</li>
          <li>Tata Group - Data Visualisation: Empowering Business with Effective Insights Job Simulation</li>
        </ul>
      </div>
    </div>
  );
};

export default ResumeInfo;
