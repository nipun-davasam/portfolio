"use client"

import { downloadStoredResume } from "./resume-storage"

/**
 * Downloads the stored resume PDF file
 */
export const downloadResumePDF = async (): Promise<void> => {
  try {
    await downloadStoredResume()
  } catch (error) {
    console.error("Error downloading PDF:", error)
    alert("Error downloading resume. Please try again.")
  }
}

/**
 * Opens the resume for viewing in a new tab
 */
export const viewResumePDF = (): void => {
  try {
    window.open("/resume", "_blank")
  } catch (error) {
    console.error("Error viewing PDF:", error)
    alert("Error opening resume. Please try again.")
  }
}

/**
 * Legacy function for browser print (kept for compatibility)
 */
export const generateResumePDF = () => {
  // Create a new window for printing
  const printWindow = window.open("", "_blank")

  if (!printWindow) {
    alert("Please allow popups to download the PDF")
    return
  }

  const resumeContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Nipun Manjunath Davasam - Resume</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Arial', sans-serif;
          line-height: 1.4;
          color: #333;
          max-width: 8.5in;
          margin: 0 auto;
          padding: 0.5in;
          background: white;
        }
        
        .header {
          text-align: center;
          border-bottom: 2px solid #10b981;
          padding-bottom: 15px;
          margin-bottom: 20px;
        }
        
        .name {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 5px;
        }
        
        .title {
          font-size: 16px;
          color: #10b981;
          font-weight: 600;
          margin-bottom: 10px;
        }
        
        .contact-info {
          font-size: 11px;
          color: #666;
        }
        
        .section {
          margin-bottom: 20px;
        }
        
        .section-title {
          font-size: 14px;
          font-weight: bold;
          text-transform: uppercase;
          border-bottom: 1px solid #10b981;
          padding-bottom: 3px;
          margin-bottom: 10px;
        }
        
        .job {
          margin-bottom: 15px;
        }
        
        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 5px;
        }
        
        .company {
          font-weight: bold;
          font-size: 12px;
        }
        
        .position {
          color: #10b981;
          font-weight: 600;
          font-size: 11px;
        }
        
        .location {
          font-size: 10px;
          color: #666;
        }
        
        .duration {
          font-size: 10px;
          color: #666;
          white-space: nowrap;
        }
        
        .achievements {
          list-style: none;
          margin-left: 0;
        }
        
        .achievements li {
          font-size: 10px;
          margin-bottom: 3px;
          padding-left: 10px;
          position: relative;
        }
        
        .achievements li:before {
          content: "●";
          color: #10b981;
          position: absolute;
          left: 0;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        
        .skill-category {
          font-size: 10px;
        }
        
        .skill-category-title {
          font-weight: bold;
          margin-bottom: 3px;
        }
        
        .project {
          margin-bottom: 12px;
        }
        
        .project-title {
          font-weight: bold;
          font-size: 11px;
          margin-bottom: 3px;
        }
        
        .project-org {
          color: #10b981;
          font-weight: 600;
        }
        
        .education-item {
          margin-bottom: 10px;
        }
        
        .degree {
          font-weight: bold;
          font-size: 11px;
        }
        
        .institution {
          color: #10b981;
          font-size: 10px;
        }
        
        .edu-duration {
          font-size: 10px;
          color: #666;
          float: right;
        }
        
        .summary-text {
          font-size: 11px;
          text-align: justify;
          line-height: 1.4;
        }
        
        @media print {
          body {
            padding: 0.3in;
          }
          
          .section {
            page-break-inside: avoid;
            margin-bottom: 15px;
          }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="name">Nipun Manjunath Davasam</div>
        <div class="title">Full Stack Engineer | Software Engineer</div>
        <div class="contact-info">
          nipun.davasam@gmail.com | (945) 278-1790 | Potsdam, NY, USA | linkedin.com/in/nipun-davasam/ | IEEE | GitHub
        </div>
      </div>

      <div class="section">
        <div class="section-title">Professional Summary</div>
        <div class="summary-text">
          Software Engineer with 3+ years of experience in developing scalable and high-performance web applications and 
          backend services using Java, Python, Spring Boot, and React.js. Proven ability in microservices architecture, 
          RESTful API design, and cloud-native application development on AWS.
        </div>
      </div>

      <div class="section">
        <div class="section-title">Skills</div>
        <div class="skills-grid">
          <div class="skill-category">
            <div class="skill-category-title">Programming Languages:</div>
            Java, Python, JavaScript
          </div>
          <div class="skill-category">
            <div class="skill-category-title">Technical Skills:</div>
            Data Warehousing, Web Scraping
          </div>
          <div class="skill-category">
            <div class="skill-category-title">Web Development:</div>
            HTML5, CSS, React.js
          </div>
          <div class="skill-category">
            <div class="skill-category-title">Tools and Technologies:</div>
            Postman, GitHub, JIRA, Jenkins, Docker, Swagger, Azure, Maven, Kafka, Framer
          </div>
          <div class="skill-category">
            <div class="skill-category-title">Frameworks:</div>
            Spring Boot, Junit, Flask
          </div>
          <div class="skill-category">
            <div class="skill-category-title">Cloud & Databases:</div>
            AWS (EC2, S3, RDS), Firebase, MySQL
          </div>
          <div class="skill-category">
            <div class="skill-category-title">Certification:</div>
            AWS Cloud Practitioner
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Professional Experience</div>
        
        <div class="job">
          <div class="job-header">
            <div>
              <div class="company">ORACLE CERNER</div>
              <div class="position">Software Engineer</div>
              <div class="location">Bengaluru, Karnataka, India</div>
            </div>
            <div class="duration">12/2021 - 07/2023</div>
          </div>
          <ul class="achievements">
            <li>Redesigned backend service caching mechanism between the service layer and database, integrating Jenkins based CI/CD pipelines to automate deployment and testing, reducing release cycles by 25% and improving system performance by 30%</li>
            <li>Redesigned the UI of real-time medical data visualization, ensuring 100% visibility of patient vitals. Eliminated previous data loss issues, improving usability for healthcare personnel and hospitals by 60%</li>
            <li>Classified and rectified 40% of the code's CVEs (Common Vulnerabilities and Exposures) to comply with federal rules and requirements</li>
            <li>Collaborated with designers & product managers to refine UI/UX based on user feedback.</li>
          </ul>
        </div>

        <div class="job">
          <div class="job-header">
            <div>
              <div class="company">INFOSYS</div>
              <div class="position">Systems Engineer</div>
              <div class="location">Bengaluru, Karnataka, India</div>
            </div>
            <div class="duration">01/2021 - 11/2021</div>
          </div>
          <ul class="achievements">
            <li>Consumed RESTful APIs to develop and independently enhance the website's UI used by both the client and the organization.</li>
            <li>Added functionality to the website's UI that allowed users to dynamically create filters based on their needs and view raw data sent by networking devices, improving user satisfaction by 25%.</li>
            <li>Refactored the website architecture to support multiple backend services, improving code reusability and reducing onboarding time for new integrations by 40%</li>
          </ul>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Projects</div>
        
        <div class="project">
          <div class="project-title">Integrated Data Warehouse and Web Application Development <span class="project-org">(Clarkson University)</span></div>
          <ul class="achievements">
            <li>Designed and implemented an end-to-end ETL pipeline, leveraging Dimensional Database Modeling for seamless data integration.</li>
            <li>Developed a Flask-based web application to enable efficient database access and management.</li>
            <li>Optimized SQL queries, improving data retrieval performance and analytical capabilities.</li>
          </ul>
        </div>

        <div class="project">
          <div class="project-title">E-Prescription <span class="project-org">(Oracle Cerner)</span></div>
          <ul class="achievements">
            <li>Developed a React web app, focusing on reusable UI components, responsive/pixel-perfect design, with a Spring Boot backend to streamline prescription record-keeping.</li>
            <li>Improved patient readability by adding dosage, duration, and ingestion time details.</li>
            <li>Enabled dynamic prescription modifications for doctors, ensuring accuracy and flexibility.</li>
          </ul>
        </div>

        <div class="project">
          <div class="project-title">Voice Enabled AI Website</div>
          <ul class="achievements">
            <li>Developed a web app using React, Spring Boot, and AI-powered speech recognition for voice-based navigation and interaction.</li>
            <li>Integrated speech-to-text processing for real-time command execution and text-to-speech feedback for accessibility.</li>
            <li>Optimized for fast, accurate voice interactions using both client-side and backend AI models, deployed on the cloud for scalability and reliability.</li>
          </ul>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Education</div>
        
        <div class="education-item">
          <div class="edu-duration">08/2023 - 05/2025</div>
          <div class="degree">Master of Science, Computer Science</div>
          <div class="institution">Clarkson University, Potsdam, NY</div>
        </div>

        <div class="education-item">
          <div class="edu-duration">08/2016 - 08/2020</div>
          <div class="degree">Bachelor of Technology, Electronics and Communication</div>
          <div class="institution">Amrita School of Engineering, Bengaluru, India</div>
        </div>
      </div>
    </body>
    </html>
  `

  printWindow.document.write(resumeContent)
  printWindow.document.close()

  // Wait for content to load, then trigger print
  printWindow.onload = () => {
    setTimeout(() => {
      printWindow.print()
      printWindow.close()
    }, 250)
  }
}
